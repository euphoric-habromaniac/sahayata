# Sahayata - Mental Health Screening Platform

Sahayata is a web app that asks parents or teachers a set of screening questions about a young person and shows a summary of where concerns may exist. It is a screening aid, not a diagnostic tool.

## Hackathon context

Built by Team GhostStack for the Google Devs Sprint hackathon in about 12 hours. It is a hackathon prototype.

## Status

Working prototype. The questionnaire flow (role, age, questions, results) runs against a PostgreSQL database. Sign-in uses Firebase (Google) on the client; the server does not enforce authentication (`server/replitAuth.ts` is a stub). There are no tests, no screenshots yet and no public demo link. Treat it as a demo, not as something to put real children's data into.

## Features

- Screening questionnaire loaded from `questions.txt` into the database, with a rationale and source type noted for each question
- Two roles: parent and teacher
- Age selection, then questionnaire, then a results page grouped by category
- Firebase Google sign-in on the client
- PostgreSQL storage through Drizzle ORM
- React frontend, responsive layout
- Static pages: about, FAQ, support centres, professional directory, privacy policy, terms, disclaimer

## Local Development Setup

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sahayata
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/sahayata
   NODE_ENV=development
   PORT=5000
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_APP_ID=
   ```
   The three `VITE_FIREBASE_*` values come from your own Firebase project. Never commit this file.

4. **Set up the database**
   ```bash
   # Push the database schema
   npm run db:push
   
   # Load the questions from questions.txt
   npx tsx server/initDb.ts
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Production Build

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   ├── db.ts             # Database connection
│   ├── storage.ts        # Data access layer
│   └── loadQuestions.ts  # Question data loader
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema and types
└── questions.txt        # Assessment questions data
```

## Team - GhostStack

- **Pranjal (Captain)** - Backend, Research, Logic
- **Divyansh** - APIs for Authentication, Presentation
- **Gaurav** - Questionnaire Specialist (Psychology & Research)
- **Debashish & Abhay** - Frontend Development

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Firebase Auth (Google) on the client
- **Deployment**: built on Replit; no live deployment is linked

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run check` - Run TypeScript type checking

## License

MIT. See `LICENSE`.