# Sahayata - Mental Health Screening Platform

Sahayata is a comprehensive, confidential screening web application designed to help identify early signs of developmental and mental health challenges in young people. Built by Team GhostStack.

## Features

- Research-based screening questionnaire with 88+ professional assessment questions
- Multiple user roles (parents, teachers) for holistic evaluation
- Secure authentication with multiple OAuth providers
- PostgreSQL database for robust data management
- React.js frontend with responsive design
- Empathy-centered UI/UX design

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
   ```

4. **Set up the database**
   ```bash
   # Push the database schema
   npm run db:push
   
   # Initialize with questions data
   npm run db:init
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
- **Authentication**: Passport.js with multiple OAuth providers
- **Deployment**: Replit (current), ready for other platforms

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:init` - Initialize database with questions
- `npm run check` - Run TypeScript type checking

## License

MIT License - Built with love for mental health accessibility