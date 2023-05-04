import { useEffect, useContext, useState } from "react";
import KanjiContext from "../context/kanji";
import Kanji from "./Kanji";
import Button from "./Button";

function KanjiCard() {
  const { kanjis, fetchKanjisJouyou1 } = useContext(KanjiContext);
  const [showBack, setShowBack] = useState(false);
  const [quizCount, setQuizCount] = useState(0);
  const [quiz, setQuiz] = useState([
    { kanjiData: { kanji: "" }, right: false, wrong: false },
  ]);

  useEffect(() => {
    createListForQuiz();
  }, [kanjis]);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const handleCorrectAnswerClick = () => {
    changeToTrue();
    setQuizCount(quizCount + 1);
    setShowBack(!showBack);
  };

  const handleWrongAnswerClick = () => {
    changeToFalse();
    setQuizCount(quizCount + 1);
    setShowBack(!showBack);
  };

  let changeToTrue = () => {
    let currentKanji = quiz[quizCount].kanjiData.kanji;
    let newObject = quiz.map((item) => {
      if (item.kanjiData.kanji === currentKanji) {
        return { ...item, right: true };
      }
      return item;
    });
    setQuiz(newObject);
  };

  let changeToFalse = () => {
    let currentKanji = quiz[quizCount].kanjiData.kanji;
    let newObject = quiz.map((item) => {
      if (item.kanjiData.kanji === currentKanji) {
        return { ...item, wrong: true };
      }
      return item;
    });
    setQuiz(newObject);
  };

  const createListForQuiz = () => {
    if (!kanjis || kanjis[0] === undefined) {
      return;
    }
    const results = [];
    while (results.length < 20) {
      const item = kanjis[Math.floor(Math.random() * kanjis.length)];
      if (results.length === 0) {
        results.push({ kanjiData: item, right: false, wrong: false });
      } else if (
        //results.find returns the first object it finds and returns the result - js is weird and undefind is falsy and defined is truthy.
        !results.find((result) => {
          return result.kanjiData.kanji === item.kanji;
        })
      ) {
        results.push({ kanjiData: item, right: false, wrong: false });
      }
    }
    setQuiz(results);
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
            <Kanji kanji={quiz[quizCount]} />
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
            <Kanji kanji={quiz[quizCount]} />
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
