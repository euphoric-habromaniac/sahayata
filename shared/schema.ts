import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable("sessions", {
  sid: varchar("sid").primaryKey(),
  sess: jsonb("sess").notNull(),
  expire: timestamp("expire").notNull(),
});

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const assessments = pgTable("assessments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id"), // nullable for anonymous assessments
  userRole: text("user_role").notNull(), // 'myself', 'child', 'student'
  ageGroup: text("age_group"), // '8-13', '14-19', null for 'myself'
  responses: jsonb("responses").notNull(), // question_id -> answer mapping
  results: jsonb("results").notNull(), // category -> score mapping
  isAnonymous: integer("is_anonymous").notNull().default(0), // 1 for anonymous, 0 for logged in
  createdAt: timestamp("created_at").defaultNow(),
});

export const questions = pgTable("questions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  text: text("text").notNull(),
  description: text("description"),
  category: text("category").notNull(), // 'attention', 'emotional', 'reading', 'social'
  ageGroup: text("age_group"), // '8-13', '14-19', null for all ages
  userRole: text("user_role"), // 'myself', 'child', 'student', null for all roles
  weight: integer("weight").notNull().default(1),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const upsertUserSchema = createInsertSchema(users).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertAssessmentSchema = createInsertSchema(assessments).omit({
  id: true,
  createdAt: true,
});

export const insertQuestionSchema = createInsertSchema(questions).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;
export type Assessment = typeof assessments.$inferSelect;

export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type Question = typeof questions.$inferSelect;

// Response and result types
export type QuestionResponse = {
  questionId: string;
  answer: 'yes' | 'maybe' | 'no';
};

export type CategoryResult = {
  name: string;
  description: string;
  percentage: number;
  level: string;
  recommendations: string[];
};

export type AssessmentResults = {
  attention: CategoryResult;
  emotional: CategoryResult;
  reading: CategoryResult;
  social: CategoryResult;
};
