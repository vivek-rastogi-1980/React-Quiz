import { useState } from 'react';
import { useQuizData } from './hooks/useQuizData';
import { useRetest } from './hooks/useRetest';
import NameInput from './components/NameInput';
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/flashcard.css';

function App() {
  const { questions, loading, error } = useQuizData();
  const {
    isRetestMode,
    retestQuestions,
    addIncorrectAnswer,
    startRetest,
    clearRetestData,
    hasIncorrectAnswers
  } = useRetest(questions);

  const [userName, setUserName] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestions = isRetestMode ? retestQuestions : questions;

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setQuizStarted(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setQuestionsAttempted(prev => prev + 1);
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectAnswers(prev => prev + 1);
      addIncorrectAnswer(currentQuestions[currentQuestionIndex].id);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setQuestionsAttempted(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    if (isRetestMode) {
      clearRetestData();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="text-lg sm:text-xl text-gray-700">Loading questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="text-lg sm:text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!quizStarted) {
    return <NameInput onNameSubmit={handleNameSubmit} />;
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header
          userName={userName}
          questionsAttempted={questionsAttempted}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          remainingQuestions={0}
        />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              {isRetestMode ? 'Retest Completed! 🎉' : 'Quiz Completed! 🎉'}
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-center">
                <span className="font-semibold">Total Questions:</span>{' '}
                {currentQuestions.length}
              </p>
              <p className="text-base sm:text-lg text-green-600 text-center">
                <span className="font-semibold">Correct Answers:</span>{' '}
                {correctAnswers}
              </p>
              <p className="text-base sm:text-lg text-red-600 text-center">
                <span className="font-semibold">Incorrect Answers:</span>{' '}
                {incorrectAnswers}
              </p>
              <p className="text-base sm:text-lg text-center">
                <span className="font-semibold">Score:</span>{' '}
                {Math.round((correctAnswers / currentQuestions.length) * 100)}%
              </p>
            </div>
            <div className="mt-6 space-y-3 sm:space-y-4">
              <button
                onClick={handleRestart}
                className="w-full py-2 sm:py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              >
                {isRetestMode ? 'Start New Quiz' : 'Restart Quiz'}
              </button>
              {!isRetestMode && hasIncorrectAnswers && (
                <button
                  onClick={() => {
                    startRetest();
                    handleRestart();
                  }}
                  className="w-full py-2 sm:py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Retest Failed Questions
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const remainingQuestions = currentQuestions.length - questionsAttempted;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header
          userName={userName}
          questionsAttempted={questionsAttempted}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          remainingQuestions={remainingQuestions}
        />
        <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <Flashcard
            question={currentQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
          />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
