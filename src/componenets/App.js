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
        >
          {showBack ? (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">B</h1>
              <div className="flex justify-center w-full mt-8">
                <Button success rounded className="mr-4" onClick={handleClick}>
                  Correct
                </Button>
                <Button danger rounded onClick={handleClick}>
                  Incorrect
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">A</h1>
              <div className="flex justify-center w-full mt-8">
                <Button primary onClick={handleClick}>
                  Show Answer
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
