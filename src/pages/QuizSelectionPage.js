import React, { useState } from "react";
import QuizDropdown from "../componenets/QuizDropdown";
import QuizLengthSelection from "../componenets/QuizLengthSelection";
import Button from "../componenets/Button";
import { useNavigate } from "react-router-dom";

const QuizSelectionPage = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");
  const navigate = useNavigate();

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };

  const handleTextFieldChange = (value) => {
    setTextFieldValue(value);
  };

  const handleClick = () => {
    localStorage.setItem("kanjiListType", dropdownValue);
    localStorage.setItem("quizLength", textFieldValue);
    navigate("/quiz");
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

  return <div>{renderQuizSelectionMenu()}</div>;
};

export default QuizSelectionPage;
