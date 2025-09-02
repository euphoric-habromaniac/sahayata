import {
  type User,
  type InsertUser,
  type UpsertUser,
  type Assessment,
  type InsertAssessment,
  type Question,
  type InsertQuestion,
} from "@shared/schema";
import { randomUUID } from "crypto";
import { loadQuestionsFromFile } from "./loadQuestions";

// Interface for storage operations
export interface IStorage {
  // User operations (IMPORTANT for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Assessment operations
  getAssessment(id: string): Promise<Assessment | undefined>;
  createAssessment(assessmentData: InsertAssessment): Promise<Assessment>;
  getUserAssessments(userId: string): Promise<Assessment[]>;
  
  // Question operations
  getQuestions(userRole?: string, ageGroup?: string): Promise<Question[]>;
  createQuestion(questionData: InsertQuestion): Promise<Question>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private assessments: Map<string, Assessment>;
  private questions: Map<string, Question>;

  constructor() {
    this.users = new Map();
    this.assessments = new Map();
    this.questions = new Map();
    this.initializeQuestionsFromFile();
  }

  private initializeQuestionsFromFile() {
    const allQuestions = loadQuestionsFromFile();
    
    allQuestions.forEach(questionData => {
      const question: Question = {
        id: randomUUID(),
        text: questionData.text,
        description: questionData.description || null,
        category: questionData.category,
        ageGroup: questionData.ageGroup || null,
        userRole: questionData.userRole || null,
        weight: questionData.weight || 1
      };
      this.questions.set(question.id, question);
    });
  }

  // User methods for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const existingUser = this.users.get(userData.id!);
    
    if (existingUser) {
      // Update existing user
      const updatedUser: User = {
        ...existingUser,
        ...userData,
        updatedAt: new Date(),
      };
      this.users.set(updatedUser.id, updatedUser);
      return updatedUser;
    } else {
      // Create new user
      const newUser: User = {
        id: userData.id || randomUUID(),
        email: userData.email || null,
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
        profileImageUrl: userData.profileImageUrl || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.users.set(newUser.id, newUser);
      return newUser;
    }
  }

  // Assessment methods
  async getAssessment(id: string): Promise<Assessment | undefined> {
    return this.assessments.get(id);
  }

  async createAssessment(assessmentData: InsertAssessment): Promise<Assessment> {
    const assessment: Assessment = {
      id: randomUUID(),
      userId: assessmentData.userId || null,
      userRole: assessmentData.userRole,
      ageGroup: assessmentData.ageGroup || null,
      responses: assessmentData.responses,
      results: assessmentData.results,
      isAnonymous: assessmentData.isAnonymous || 0,
      createdAt: new Date(),
    };
    this.assessments.set(assessment.id, assessment);
    return assessment;
  }

  async getUserAssessments(userId: string): Promise<Assessment[]> {
    return Array.from(this.assessments.values()).filter(
      assessment => assessment.userId === userId
    );
  }

  // Question methods
  async getQuestions(userRole?: string, ageGroup?: string): Promise<Question[]> {
    return Array.from(this.questions.values()).filter(question => {
      if (userRole && question.userRole && question.userRole !== userRole) {
        return false;
      }
      if (ageGroup && question.ageGroup && question.ageGroup !== ageGroup) {
        return false;
      }
      return true;
    });
  }

  async createQuestion(questionData: InsertQuestion): Promise<Question> {
    const question: Question = {
      id: randomUUID(),
      text: questionData.text,
      description: questionData.description || null,
      category: questionData.category,
      ageGroup: questionData.ageGroup || null,
      userRole: questionData.userRole || null,
      weight: questionData.weight || 1,
    };
    this.questions.set(question.id, question);
    return question;
  }
}

export const storage = new MemStorage();