import { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
}

export const useQuizData = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate API call delay
      setTimeout(() => {
        setQuestions(questionsData.questions);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to load questions');
      setLoading(false);
    }
  }, []);

  return { questions, loading, error };
}; 