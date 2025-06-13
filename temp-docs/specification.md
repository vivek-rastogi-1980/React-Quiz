Project Requirement Document (PRD)


Project Title: React Learning Quiz App
Prepared By: Vivek Rastogi — Senior Software Analyst
Date: 12 June 2025
________________________________________
📌 Project Overview:
The React Learning Quiz App is an interactive, single-session quiz application designed to help users test and improve their knowledge of React essentials. The app will present a set of 50 randomized questions sourced from a local JSON file, with real-time tracking of attempts and scores, a flashcard-based interaction model, and the ability to retest failed questions.
The application will be built using React + Vite, styled with Tailwind CSS, and will operate entirely in the browser without user authentication.
________________________________________
📌 Technology Stack:
•	Frontend Framework: React (with Vite)
•	Styling: Tailwind CSS
•	State Management: React Hooks / Context API (if needed)
•	Data Storage: Local JSON file for questions, localStorage for session persistence (e.g., retest)
•	Build Tool: Vite
________________________________________
📌 Core Features & Requirements:
1️⃣ User Name Input:
•	Prompt user to enter their name before starting the quiz (required field).
•	Display the user’s name prominently in the app header throughout the session.
________________________________________
2️⃣ Quiz Structure:
•	50 total questions loaded from a local JSON file.
•	Questions will be randomized on each quiz start.
•	Questions distributed by difficulty:
o	30% Easy
o	50% Medium
o	20% Hard
(difficulty tags managed internally in JSON, but not shown to user)
________________________________________
3️⃣ Question Presentation:
•	Questions displayed as flashcards with:
o	Question text on the front
o	Multiple-choice options (radio buttons or buttons)
o	Flip interaction reveals:
	The correct answer
	A success/failure message:
	✅ “You are correct!”
	❌ “Incorrect. The correct answer was…”
•	Use subtle animations for card flipping using CSS transitions or React libraries (optional).
________________________________________
4️⃣ Real-Time Score Tracking:
Header section will display:
•	User Name
•	Number of Questions Attempted
•	Number of Correct Answers
•	Number of Incorrect Answers
•	Number of Remaining Questions
________________________________________
5️⃣ End of Quiz Flow:
•	Display a Finish Quiz button after all questions are attempted.
•	Show a Quiz Summary:
o	Total Correct
o	Total Incorrect
o	Score Percentage
•	If any questions were answered incorrectly:
o	Show a Retest Failed Questions button.
o	Retest will immediately present only the failed questions in a fresh flashcard format.
________________________________________
6️⃣ Data Persistence (localStorage):
•	Store failed questions temporarily in localStorage.
•	Clear localStorage on session completion or new quiz start.
________________________________________
📌 Data Structure (Question JSON Example)
json
CopyEdit
[
  {
    "id": 1,
    "question": "What is the primary purpose of useState in React?",
    "options": [
      "To create routing paths",
      "To manage component state",
      "To fetch data from an API",
      "To render lists"
    ],
    "correctAnswer": "To manage component state",
    "difficulty": "Easy"
  },
  ...
]
________________________________________
📌 Non-Functional Requirements:
•	Performance: Fast load and render performance using Vite.
•	Responsiveness: Fully responsive on desktop, tablet, and mobile.
•	Accessibility: Use ARIA labels and keyboard navigation support for flashcards and buttons.
•	Code Maintainability: Modular, clean component structure with reusable components.
________________________________________
📌 Optional Future Enhancements:
•	Progress Bar for quiz completion
•	Dark/Light Mode toggle
•	Review All Answers summary after quiz
•	Share Score option
(currently out of scope but easy to implement later)
________________________________________
📌 Assumptions:
No authentication or backend services required.

Quiz data remains static unless updated in the JSON file.

No timer or time tracking for questions.

No sound or audio feedback.
________________________________________
📌 Risks & Limitations:
Browser localStorage limits may affect quiz persistence on older devices or private mode.

JSON-based question storage lacks scalability beyond local usage.
________________________________________
📌 Approval:
Name	Role	Signature / Approval
Vivek Rastogi Senior Software Analyst	✅

