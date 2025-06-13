import { useState, useEffect } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
}

const STORAGE_KEY = 'react-quiz-incorrect-answers';

export const useRetest = (questions: Question[]) => {
  const [incorrectQuestionIds, setIncorrectQuestionIds] = useState<number[]>([]);
  const [isRetestMode, setIsRetestMode] = useState(false);
  const [retestQuestions, setRetestQuestions] = useState<Question[]>([]);

  // Load incorrect answers from localStorage on mount
  useEffect(() => {
    const storedIds = localStorage.getItem(STORAGE_KEY);
    if (storedIds) {
      setIncorrectQuestionIds(JSON.parse(storedIds));
    }
  }, []);

  // Save incorrect answers to localStorage whenever they change
  useEffect(() => {
    if (incorrectQuestionIds.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(incorrectQuestionIds));
    }
  }, [incorrectQuestionIds]);

  const addIncorrectAnswer = (questionId: number) => {
    setIncorrectQuestionIds(prev => {
      if (!prev.includes(questionId)) {
        return [...prev, questionId];
      }
      return prev;
    });
  };

  const startRetest = () => {
    const failedQuestions = questions.filter(q => 
      incorrectQuestionIds.includes(q.id)
    );
    setRetestQuestions(failedQuestions);
    setIsRetestMode(true);
  };

  const clearRetestData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIncorrectQuestionIds([]);
    setIsRetestMode(false);
    setRetestQuestions([]);
  };

  const hasIncorrectAnswers = incorrectQuestionIds.length > 0;

  return {
    incorrectQuestionIds,
    isRetestMode,
    retestQuestions,
    addIncorrectAnswer,
    startRetest,
    clearRetestData,
    hasIncorrectAnswers
  };
}; 