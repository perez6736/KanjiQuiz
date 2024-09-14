import KanjiCard from "../componenets/KanjiCard";
import QuizResultsPage from "./QuizResultsPage";
import { mockdata } from "../mockdata/jouyou1Kanji";
import { useState } from "react";

const QuizPage = () => {
  const [isQuizDone, setIsQuizDone] = useState(false);
  const kanjiListType = localStorage.getItem("KanjiListType");
  const quizLength = localStorage.getItem("quizLength");

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

  const returnUpdatedQuizList = (newQuizList) => {
    // TODO: make sure this list gets updated properly
    quizList = newQuizList;
    setIsQuizDone(true);
  };

  // do i want to reshuffle everytime the page reloads?
  let quizList = getRandomSubset(mockdata.kanjis, quizLength).map((item) => {
    return {
      kanji: item.kanji,
      meanings: item.meanings.en,
      isCorrect: false,
    };
  });

  const renderContent = () => {
    if (isQuizDone) {
      return <QuizResultsPage quizList={quizList} />;
    }
    return (
      <KanjiCard
        quizList={quizList}
        returnUpdatedQuizList={returnUpdatedQuizList}
      />
    );
  };

  return <div>{renderContent()}</div>;
};

export default QuizPage;
