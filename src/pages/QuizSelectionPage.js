import React, { useState } from "react";
import QuizDropdown from "../componenets/QuizDropdown";
import QuizLengthSelection from "../componenets/QuizLengthSelection";
import Button from "../componenets/Button";
import QuizPage from "./QuizPage";

const QuizSelectionPage = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };

  const handleTextFieldChange = (value) => {
    setTextFieldValue(value);
  };

  const handleClick = () => {
    console.log(
      `clicked lets start the quiz with ${dropdownValue} and lenght of ${textFieldValue}`
    );
  };

  const isButtonDisabled = dropdownValue === "" || textFieldValue === "";

  const renderButton = () => {
    if (isButtonDisabled) {
      return (
        <Button className="block w-full px-4 py-2 mt-6 text-lg text-white rounded-md bg-gray-400 cursor-not-allowed">
          Start Quiz
        </Button>
      );
    } else {
      return (
        <Button
          primary
          onClick={handleClick}
          className={
            "block w-full px-4 py-2 mt-6 text-lg text-white rounded-md"
          }
        >
          Start Quiz
        </Button>
      );
    }
  };

  const renderQuizSelectionMenu = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-xl">
          <div className="mb-6">
            <QuizDropdown handleDropdownChange={handleDropdownChange} />
          </div>
          <div>
            <QuizLengthSelection
              handleTextFieldChange={handleTextFieldChange}
            />
          </div>
          {renderButton()}
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    return (
      <QuizPage QuizType={dropdownValue} QuizLength={textFieldValue}></QuizPage>
    );
  };

  return <div>{renderQuizSelectionMenu()}</div>;
};

export default QuizSelectionPage;
