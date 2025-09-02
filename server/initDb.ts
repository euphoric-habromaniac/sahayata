import { db } from "./db";
import { questions } from "@shared/schema";
import { loadQuestionsFromFile } from "./loadQuestions";

async function initializeDatabase() {
  try {
    console.log("Initializing database with questions...");
    
    // Check if questions already exist
    const existingQuestions = await db.select().from(questions).limit(1);
    
    if (existingQuestions.length > 0) {
      console.log("Database already initialized with questions");
      return;
    }
    
    // Load and insert questions
    const questionsData = loadQuestionsFromFile();
    console.log(`Loading ${questionsData.length} questions...`);
    
    await db.insert(questions).values(questionsData);
    console.log("Database initialized successfully!");
    
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .then(() => {
      console.log("Database initialization complete");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Database initialization failed:", error);
      process.exit(1);
    });
}

export { initializeDatabase };