import { useState, useEffect } from "react";
import KanjiCard from "../componenets/KanjiCard";
import QuizResultsPage from "../pages/QuizResultsPage";
import kanjiAPI from "../api/kanji";

const QuizPage = () => {
  const [quizCount, setQuizCount] = useState(0);
  const [quizList, setQuizList] = useState([]);
  const [kanjis, setKanjis] = useState([]);

  useEffect(() => {
    const fetchKanji = async () => {
      try {
        const response = await kanjiAPI.get("/list/jouyou/1");
        setKanjis(response.data.kanjis);
      } catch (error) {
        setKanjis(error.message);
      }
    };

    fetchKanji();
  }, []);

  useEffect(() => {
    if (kanjis) {
      createListForQuiz();
    }
  }, [kanjis]);

  const incrementCount = () => {
    setQuizCount(quizCount + 1);
  };

  const markKanjiCorrect = () => {
    let currentKanji = quizList[quizCount].kanjiData.kanji;
    let newObject = quizList.map((item) => {
      if (item.kanjiData.kanji === currentKanji) {
        return { ...item, isCorrect: true };
      }
      return item;
    });
    setQuizList(newObject);
  };

  const createListForQuiz = () => {
    if (kanjis.length === 0) {
      return;
    }
    const results = [];
    while (results.length < 20) {
      const item = kanjis[Math.floor(Math.random() * kanjis.length)];
      if (results.length === 0) {
        results.push({
          kanjiData: {
            kanji: item.kanji,
            meanings: item.meanings.en,
            readings: item.readings,
          },
          isCorrect: false,
        });
      } else if (
        //results.find returns the first object it finds and returns the result - js is weird and undefind is falsy and defined is truthy.
        !results.find((result) => {
          return result.kanjiData.kanji === item.kanji;
        })
      ) {
        results.push({
          kanjiData: {
            kanji: item.kanji,
            meanings: item.meanings.en,
            readings: item.readings,
          },
          isCorrect: false,
        });
      }
    }
    setQuizList(results);
  };

  const renderContent = () => {
    if (quizCount >= 3) {
      return <QuizResultsPage />;
    } else {
      return (
        <KanjiCard
          quizList={quizList}
          markKanjiCorrect={markKanjiCorrect}
          quizCount={quizCount}
          incrementCount={incrementCount}
        />
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default QuizPage;
