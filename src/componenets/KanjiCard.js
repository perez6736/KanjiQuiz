import { useState } from "react";
import Kanji from "./Kanji";
import Button from "./Button";

function KanjiCard({ quizList, markKanjiCorrect, quizCount, incrementCount }) {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const handleCorrectAnswerClick = () => {
    markKanjiCorrect();
    incrementCount();
    setShowBack(!showBack);
  };

  const handleWrongAnswerClick = () => {
    incrementCount();
    setShowBack(!showBack);
  };

  const showQuizItem = () => {
    if (quizList.length > 0) {
      return quizList[quizCount].kanjiData.kanji;
    } else {
      return "...Loading";
    }
  };

  return (
    <main className="flex items-center justify-center vh-100 mt-16">
      <div
        className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-around h-1/2 w-1/4 ${
          showBack ? "animate-flip" : ""
        }`}
      >
        {showBack ? (
          <div className="flex flex-col items-center">
            <Kanji kanji={showQuizItem()} />
            <div className="flex justify-center w-full mt-8">
              <Button
                success
                rounded
                className="mr-4"
                onClick={handleCorrectAnswerClick}
              >
                Correct
              </Button>
              <Button danger rounded onClick={handleWrongAnswerClick}>
                Incorrect
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Kanji kanji={showQuizItem()} />
            <div className="flex justify-center w-full mt-8">
              <Button primary onClick={handleClick}>
                Show Answer
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default KanjiCard;
