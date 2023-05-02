import { useEffect, useContext, useState } from "react";
import KanjiContext from "../context/kanji";
import Kanji from "./Kanji";
import Header from "./Header";
import Button from "./Button";

function App() {
  const [showBack, setShowBack] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const { kanjis, fetchKanjisJouyou1 } = useContext(KanjiContext);

  useEffect(() => {
    fetchKanjisJouyou1();
  }, [fetchKanjisJouyou1]);

  useEffect(() => {
    createListForQuiz();
  }, [kanjis]);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const createListForQuiz = () => {
    console.log(kanjis);
    if (kanjis[0] === undefined) {
      return;
    }
    const result = [];
    while (result.length < 20) {
      const item = kanjis[Math.floor(Math.random() * kanjis.length)];
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    setQuiz(result);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="flex items-center justify-center vh-100 mt-16">
        <div
          className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-around h-1/2 w-1/4 ${
            showBack ? "animate-flip" : ""
          }`}
        >
          {showBack ? (
            <div className="flex flex-col items-center">
              <Kanji />
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
              <Kanji list={quiz[0]} />
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
