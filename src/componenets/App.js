import React, { useState } from "react";
import Kanji from "./Kanji";
import Header from "./Header";
import Button from "./Button";

function App() {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="h-16 flex items-center justify-center">
        <div className="text-2xl font-bold"></div>
      </header>
      <main className="flex items-center justify-center vh-100 mt-16">
        <div
          className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-around h-1/2 w-1/4 ${
            showBack ? "animate-flip" : ""
          }`}
          onClick={handleClick}
        >
          {showBack ? (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">B</h1>
              <div className="flex justify-center w-full mt-8">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg mr-4">
                  Correct
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg">
                  Incorrect
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">A</h1>
              <div className="flex justify-center w-full mt-8">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg"
                  onClick={handleClick}
                >
                  Show Answer
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
