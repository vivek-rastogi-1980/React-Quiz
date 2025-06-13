import { useState, useRef, useEffect } from 'react';
import type { Question } from '../types/index';

interface FlashcardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const Flashcard = ({ question, onAnswer, onNext }: FlashcardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFlipped) return;
      
      const optionIndex = parseInt(e.key) - 1;
      if (optionIndex >= 0 && optionIndex < question.options.length) {
        handleOptionSelect(question.options[optionIndex]);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [question, isFlipped]);

  const handleOptionSelect = (option: string) => {
    if (selectedOption || isFlipped) return;
    
    setSelectedOption(option);
    
    setTimeout(() => {
      setIsFlipped(true);
      onAnswer(option === question.correctAnswer);
    }, 500);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsFlipped(false);
    onNext();
  };

  return (
    <div 
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      role="region"
      aria-label="Quiz Question"
    >
      <div 
        ref={cardRef}
        className={`relative w-full aspect-[4/5] sm:aspect-[3/4] transition-all duration-500 transform-style-3d perspective-1000 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className={`absolute w-full h-half backface-hidden bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 ${
          isFlipped ? 'hidden' : ''
        }`}>
          <div className="h-full flex flex-col">
            <div className="mb-4 sm:mb-6 flex-shrink-0">
              <span className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                Question {question.id}
              </span>
              <span className="ml-2 inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-600 bg-gray-50 rounded-full">
                {question.difficulty}
              </span>
            </div>
            
            <h2 
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex-shrink-0"
              role="heading"
              aria-level={2}
            >
              {question.question}
            </h2>

            <div 
              className="space-y-3 sm:space-y-4"
              role="radiogroup"
              aria-label="Answer options"
            >
              {question.options.map((option: string, index: number) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption}
                  className={`w-full p-3 sm:p-4 text-left rounded-xl border-2 transition-all text-sm sm:text-base bg-white ${
                    selectedOption === option
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                  } ${
                    selectedOption && selectedOption !== option
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  role="radio"
                  aria-checked={selectedOption === option}
                >
                  <div className="flex items-start">
                    <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-center leading-6 sm:leading-8 rounded-full bg-indigo-100 text-indigo-700 font-medium text-xs sm:text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="flex-grow text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 rotate-y-180 ${
          !isFlipped ? 'hidden' : ''
        }`}>
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className={`text-4xl sm:text-6xl mb-4 sm:mb-6 ${
              selectedOption === question.correctAnswer ? 'text-green-500' : 'text-red-500'
            }`}>
              {selectedOption === question.correctAnswer ? '✓' : '✗'}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              {selectedOption === question.correctAnswer ? 'Correct!' : 'Incorrect'}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              {selectedOption === question.correctAnswer
                ? 'Great job! You got it right.'
                : `The correct answer is: ${question.correctAnswer}`}
            </p>

            <button
              onClick={handleNext}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors text-sm sm:text-base"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 