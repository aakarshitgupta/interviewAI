# InterviewX

InterviewX is an AI-powered mock interview platform that helps users practice interviews, upload resumes, generate role-based questions, answer with voice, view performance analytics, and download interview reports.

## Live Links

- Frontend: https://interviewai-uhhk.onrender.com
- Backend API: https://interviewx-0edp.onrender.com

## Features

- Google authentication with Firebase
- AI-generated interview questions based on role, experience, skills, projects, and resume
- PDF resume upload and analysis
- Voice-based interview flow
- Credit-based interview system
- Interview history and detailed performance reports
- Skill scoring for confidence, communication, and correctness
- Razorpay payment integration for buying credits
- Downloadable PDF reports

## Tech Stack

**Frontend**

- React
- Vite
- Tailwind CSS
- Redux Toolkit
- Firebase Auth
- Axios
- Recharts
- React Router

**Backend**

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Cookie-based auth
- Multer for resume uploads
- pdfjs-dist for PDF parsing
- OpenRouter API for AI responses
- Razorpay for payments

## Project Structure

```txt
interviewAI/
  client/   React frontend
  server/   Express backend
```

## Local Setup

Clone the repository:

```bash
git clone <your-repository-url>
cd interviewAI
```

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside `client/`:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Create a `.env` file inside `server/`:

```env
PORT=5050
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Do not commit `.env` files to GitHub.

## Running Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend:

```bash
cd client
npm run dev
```

Default local URLs:

- Frontend: http://localhost:5173
- Backend: http://localhost:5050

## Deployment

The project is deployed on Render:

- Frontend: https://interviewai-uhhk.onrender.com
- Backend: https://interviewx-0edp.onrender.com

Make sure all required environment variables are added in the Render dashboard for both services.

## Important Notes

- `node_modules/` should stay in `.gitignore`.
- Keep `.env` files ignored and use Render environment variables in production.
- Since authentication uses cookies, browser third-party cookie settings may affect login sessions when frontend and backend are on different domains.

## Author

Akarshit Gupta
