import KanjiCard from "../componenets/KanjiCard";
import QuizResultsPage from "./QuizResultsPage";
import { mockdata } from "../mockdata/jouyou1Kanji";
import { useEffect, useState } from "react";

const QuizPage = () => {
  const [isQuizDone, setIsQuizDone] = useState(false);
  const [quizList, setQuizList] = useState([]);
  const kanjiListType = localStorage.getItem("KanjiListType");
  const quizLength = parseInt(localStorage.getItem("quizLength"));

  // Function to shuffle an array using Fisher-Yates algorithm
  // https://www.youtube.com/watch?v=FGAUekwri1Q
  function shuffleArray(array) {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // start at end of array and work way down
      const random = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[random]] = [
        shuffledArray[random],
        shuffledArray[i],
      ]; // Swap elements
    }
    return shuffledArray;
  }

  // Function to get a random subset of an array
  function getRandomSubset(array, numItems) {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, numItems); // Return the first `numItems` elements
  }

  function returnUpdatedQuizList(newQuizList) {
    console.log("returnUpdatedQuizList");
    setQuizList(newQuizList);
    setIsQuizDone(true);
  }

  useEffect(() => {
    const newQuizList = getRandomSubset(mockdata.kanjis, quizLength).map(
      (item) => ({
        kanji: item.kanji,
        meanings: item.meanings.en,
        isCorrect: false,
      })
    );
    setQuizList(newQuizList);
  }, []);

  const renderContent = () => {
    if (isQuizDone) {
      return <QuizResultsPage quizList={quizList} />;
    }
    if (quizList.length !== 0) {
      // this stops from the kanjiCard with an empty quizlist.
      return (
        <KanjiCard
          quizList={quizList}
          returnUpdatedQuizList={returnUpdatedQuizList}
        />
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default QuizPage;
