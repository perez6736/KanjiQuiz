import KanjiCard from "../componenets/KanjiCard";
import { mockdata } from "../mockdata/jouyou1Kanji";

const QuizPage = () => {
  const kanjiListType = localStorage.getItem("KanjiListType");
  const quizLenght = localStorage.getItem("quizLenght");

  // make an api to get list of kanji for quiz.
  // make new object for quiz and quiz results page

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

  const quizList = getRandomSubset(mockdata.kanjis, quizLenght).map((item) => {
    return {
      kanji: item.kanji,
      meanings: item.meanings.en,
      isCorrect: false,
    };
  });

  console.log(quizList);

  const renderContent = () => {
    return <KanjiCard quizList={quizList} quizCount={quizLenght} />;
  };

  return <div>{renderContent()}</div>;
};

export default QuizPage;
