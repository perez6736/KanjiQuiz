import React from "react";

const ResultItem = ({ kanji, meaning, reading, level }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">{kanji}</span>
        <span className="text-gray-500">Level {level}</span>
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Meaning:</span>
          <span>{meaning}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-semibold mr-2">Reading:</span>
          <span>{reading}</span>
        </div>
      </div>
    </div>
  );
};

const QuizResults = () => {
  const results = [
    { kanji: "日", meaning: "Day", reading: "にち / ひ", level: 1 },
    { kanji: "月", meaning: "Month", reading: "げつ / つき", level: 1 },
    { kanji: "火", meaning: "Fire", reading: "か / ひ", level: 1 },
    // Add more result items as needed
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <ResultItem key={index} {...result} />
        ))}
      </div>
    </div>
  );
};

export default QuizResults;
