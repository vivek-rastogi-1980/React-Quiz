interface HeaderProps {
  userName: string;
  questionsAttempted: number;
  correctAnswers: number;
  incorrectAnswers: number;
  remainingQuestions: number;
}

const Header = ({
  userName,
  questionsAttempted,
  correctAnswers,
  incorrectAnswers,
  remainingQuestions,
}: HeaderProps) => {
  return (
    <header 
      className="bg-white shadow-md"
      role="banner"
      aria-label="Quiz Progress"
    >
      <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="flex items-center">
            <h1 
              className="text-xl sm:text-2xl font-bold text-indigo-900"
              aria-label={`Welcome, ${userName}`}
            >
              Welcome, {userName}!
            </h1>
          </div>
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full sm:w-auto"
            role="status"
            aria-label="Quiz Statistics"
          >
            <div 
              className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center"
              aria-label={`Questions attempted: ${questionsAttempted}`}
            >
              <span className="block text-xs sm:text-sm font-medium text-gray-500">Attempted</span>
              <span className="text-base sm:text-lg font-semibold text-gray-900">{questionsAttempted}</span>
            </div>
            <div 
              className="bg-green-50 rounded-lg p-2 sm:p-3 text-center"
              aria-label={`Correct answers: ${correctAnswers}`}
            >
              <span className="block text-xs sm:text-sm font-medium text-green-600">Correct</span>
              <span className="text-base sm:text-lg font-semibold text-green-700">{correctAnswers}</span>
            </div>
            <div 
              className="bg-red-50 rounded-lg p-2 sm:p-3 text-center"
              aria-label={`Incorrect answers: ${incorrectAnswers}`}
            >
              <span className="block text-xs sm:text-sm font-medium text-red-600">Incorrect</span>
              <span className="text-base sm:text-lg font-semibold text-red-700">{incorrectAnswers}</span>
            </div>
            <div 
              className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center"
              aria-label={`Questions remaining: ${remainingQuestions}`}
            >
              <span className="block text-xs sm:text-sm font-medium text-blue-600">Remaining</span>
              <span className="text-base sm:text-lg font-semibold text-blue-700">{remainingQuestions}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 