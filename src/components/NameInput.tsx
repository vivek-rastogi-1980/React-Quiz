import { useState, useRef, useEffect } from 'react';

interface NameInputProps {
  onNameSubmit: (name: string) => void;
}

const NameInput = ({ onNameSubmit }: NameInputProps) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    onNameSubmit(name.trim());
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4"
      role="main"
      aria-label="Quiz Start"
    >
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 
          id="quiz-title"
          className="text-3xl font-bold text-center text-indigo-900 mb-2"
        >
          React Quiz App
        </h1>
        <p 
          id="quiz-description"
          className="text-gray-600 text-center mb-8"
        >
          Test your React knowledge with our interactive quiz!
        </p>
        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-labelledby="quiz-title"
          aria-describedby="quiz-description"
        >
          <div>
            <label 
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter your name to begin
            </label>
            <input
              ref={inputRef}
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              className={`w-full px-4 py-2 rounded-lg border ${
                error ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
              placeholder="Your name"
              aria-invalid={!!error}
              aria-describedby={error ? 'name-error' : undefined}
            />
            {error && (
              <p 
                id="name-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameInput; 