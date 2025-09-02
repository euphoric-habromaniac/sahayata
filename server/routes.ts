import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// No authentication
// import { insertAssessmentSchema } from "@shared/schema";
import type { QuestionResponse, AssessmentResults, CategoryResult } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get questions for questionnaire
  app.get("/api/questions", async (req, res) => {
    try {
      const { userRole, ageGroup } = req.query;
      const questions = await storage.getQuestions(
        userRole as string, 
        ageGroup as string
      );
      res.json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  });

  // Submit assessment and get results
  app.post("/api/assessments", async (req, res) => {
    const { userRole, ageGroup, responses } = req.body;
    try {
      // Calculate results based on responses
      const results = await calculateAssessmentResults(responses || {});
      res.json(results);
    } catch (error) {
      console.error("Assessment calculation error:", error);
      res.status(500).json({ error: "Failed to calculate assessment results" });
    }
  });

  // Get user assessments
  app.get("/api/assessments/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const assessments = await storage.getUserAssessments(userId);
      res.json(assessments);
    } catch (error) {
      console.error("Error fetching user assessments:", error);
      res.status(500).json({ error: "Failed to fetch assessments" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Scoring algorithm
async function calculateAssessmentResults(responses: Record<string, string>): Promise<AssessmentResults> {
  const questions = await storage.getQuestions();
  
  // Initialize category scores
  const categoryScores = {
    attention: { total: 0, maxPossible: 0 },
    emotional: { total: 0, maxPossible: 0 },
    reading: { total: 0, maxPossible: 0 },
    social: { total: 0, maxPossible: 0 }
  };

  // Calculate scores for each category
  Object.entries(responses).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const category = question.category as keyof typeof categoryScores;
    const weight = question.weight;
    
    // Convert answer to score (Yes = 2, Maybe = 1, No = 0)
    let score = 0;
    switch (answer) {
      case 'yes': score = 2; break;
      case 'maybe': score = 1; break;
      case 'no': score = 0; break;
    }

    categoryScores[category].total += score * weight;
    categoryScores[category].maxPossible += 2 * weight; // Max score is 2 per question
  });

  // Convert to percentages and create result objects
  const results: AssessmentResults = {
    attention: createCategoryResult("Attention & Focus", "Ability to concentrate and maintain attention", categoryScores.attention),
    emotional: createCategoryResult("Emotional Regulation", "Managing emotions and responses", categoryScores.emotional),
    reading: createCategoryResult("Reading Fluency", "Reading comprehension and speed", categoryScores.reading),
    social: createCategoryResult("Social Interaction", "Relationships and communication", categoryScores.social)
  };

  return results;
}

function createCategoryResult(name: string, description: string, score: { total: number, maxPossible: number }): CategoryResult {
  const percentage = score.maxPossible > 0 ? Math.round((score.total / score.maxPossible) * 100) : 0;
  
  let level: string;
  let recommendations: string[];

  if (percentage >= 70) {
    level = "High alignment";
    recommendations = [
      "Consider professional evaluation for comprehensive assessment",
      "Explore targeted intervention strategies",
      "Connect with support groups and resources",
      "Discuss findings with healthcare providers"
    ];
  } else if (percentage >= 40) {
    level = "Moderate alignment";
    recommendations = [
      "Monitor patterns and document specific examples",
      "Consider consultation with school counselors or specialists",
      "Implement supportive strategies and accommodations",
      "Regular check-ins to track progress"
    ];
  } else if (percentage >= 20) {
    level = "Mild alignment";
    recommendations = [
      "Continue current supportive practices",
      "Stay aware of any developing patterns",
      "Maintain open communication about challenges",
      "Consider preventive strategies and skill building"
    ];
  } else {
    level = "Low alignment";
    recommendations = [
      "Continue current positive practices",
      "Maintain supportive environment",
      "Celebrate strengths and achievements",
      "Stay alert to any future changes"
    ];
  }

  return {
    name,
    description,
    percentage,
    level,
    recommendations
  };
}
