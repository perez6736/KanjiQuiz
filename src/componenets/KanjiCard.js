import { useState, useEffect } from "react";
import Kanji from "./Kanji";
import Button from "./Button";

function KanjiCard({ quizList, returnUpdatedQuizList }) {
  const [showBack, setShowBack] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const handleCorrectAnswerClick = () => {
    quizList[count].isCorrect = true;
    setCount(count + 1);
    setShowBack(false);
  };

  const handleWrongAnswerClick = () => {
    quizList[count].isCorrect = false;
    setCount(count + 1);
    setShowBack(false);
  };

  // useEffect to handle quiz completion
  // if i call this in showQuizItem I get a warning about updating state of another componenet here.
  // useEffect was the solution to that warning.
  // https://www.youtube.com/watch?v=0ZJgIjIuY7U
  useEffect(() => {
    if (count === quizList.length) {
      returnUpdatedQuizList(quizList);
    }
  }, [count, quizList, returnUpdatedQuizList]);

  const showQuizItem = () => {
    if (count < quizList.length && quizList[count]) {
      return quizList[count].kanji;
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
