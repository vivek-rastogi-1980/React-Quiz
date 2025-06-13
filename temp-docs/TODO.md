React Quiz App — TODO List
✅ Project Setup
✅ Initialize React Project with Vite

Install and configure Vite + React + Tailwind CSS.

Test that development server runs and displays a placeholder page.

Acceptance Criteria:

App runs on localhost

Tailwind CSS classes apply correctly to test elements.

✅ Setup Project Folder Structure

Create folders: /components, /data, /assets, /utils

Acceptance Criteria:

Proper folder structure in src/

Base files present (App.jsx, main.jsx, tailwind.config.js, etc.)

✅ Quiz Data Handling
✅ Create Local JSON Data File

Add 50 React quiz questions with id, question, options, correctAnswer, difficulty.

Acceptance Criteria:

questions.json exists under /data

Contains exactly 50 valid question objects as per PRD schema.

✅ Load Questions into App

Import JSON data and store in state.

Acceptance Criteria:

Questions load into React state on component mount.

Can console.log first question to verify.

✅ Randomize Questions on Load

Shuffle questions while maintaining total count.

Acceptance Criteria:

Every quiz start presents questions in a different order.

Correct number of questions present.

👤 User Interaction
 Create Name Input Component

Prompt user to enter their name before quiz starts.

Acceptance Criteria:

Input is required.

User cannot start quiz without name.

 Display User Name in Header

Add Header component with dynamic user name.

Acceptance Criteria:

User's entered name appears in header on all pages/components during quiz session.

🃏 Quiz Flashcard System
 Build Flashcard Component

Display question, options, and flip interaction.

Acceptance Criteria:

Question text and multiple-choice options appear.

Card flips to show correct answer and message.

 Answer Validation and Feedback

Validate selected option and show correct/incorrect feedback.

Acceptance Criteria:

Correct selection shows "You are correct!"

Incorrect selection shows correct answer message.

📊 Score and Progress Tracking
 Create Quiz Progress Header

Show Questions Attempted, Correct, Incorrect, and Remaining.

Acceptance Criteria:

All four counters update in real-time as user attempts questions.

📈 End of Quiz Flow
 Display Finish Quiz Button

Show when all questions are answered.

Acceptance Criteria:

Button appears only after last question is attempted.

 Show Quiz Summary

Display total correct, incorrect, and score percentage.

Acceptance Criteria:

Accurate values for correct, incorrect, total, and percentage shown.

🔄 Retest Functionality
 Track Incorrect Answers

Save incorrect question IDs to localStorage.

Acceptance Criteria:

localStorage key created and updated when wrong answers submitted.

 Retest Only Failed Questions

On clicking Retest button, load only failed questions.

Acceptance Criteria:

Retest button appears if any incorrect answers.

Retest quiz loads only failed questions.

 Clear Retest Data on Completion

Clear localStorage and reset app state.

Acceptance Criteria:

localStorage cleared after finishing quiz and retest.

🎨 UI Styling (Tailwind CSS)
 Style Header Component

Clean layout with user name and counters.

Acceptance Criteria:

Proper spacing, alignment, and responsive design.

 Style Flashcard Component

Card with rounded corners, shadows, and flip animations.

Acceptance Criteria:

Smooth flip transition.

Clean layout on mobile and desktop.

 Style Buttons and Inputs

Uniform button designs with hover effects.

Acceptance Criteria:

Consistent Tailwind button classes.

Input fields styled with focus states.

📱 Responsiveness & Accessibility
 Ensure Mobile Responsiveness

Test and adjust layouts for mobile and tablet views.

Acceptance Criteria:

No layout breaking on different screen sizes.

 Add Basic ARIA Accessibility

Add aria-labels and keyboard navigation support.

Acceptance Criteria:

Flashcards and buttons navigable via keyboard.

🧹 Final Clean-up
 Remove Unused Code

Clean out console.logs and unused components.

Acceptance Criteria:

No console warnings/errors on quiz completion.

 Final Test & Debug

Run through full quiz flow multiple times.

Acceptance Criteria:

All intended features work without bugs.

✅ Optional (Future Enhancement)
 Add Dark/Light Mode Toggle

Tailwind + React State switch

Acceptance Criteria:

User can toggle theme during quiz.

