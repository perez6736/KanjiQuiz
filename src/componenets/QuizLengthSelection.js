import React, { useState } from "react";

const QuizLengthSelection = ({ handleTextFieldChange }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    // Only allow integers between -1 and 25
    const intValue = parseInt(inputValue);

    if (Number.isNaN(intValue)) {
      setValue("");
    } else if (intValue > 25) {
      setValue("25");
    } else {
      setValue(inputValue);
    }

    handleTextFieldChange(inputValue);
  };

  return (
    <div>
      <label
        htmlFor="integerField"
        className="block mb-2 text-lg font-medium text-gray-700"
      >
        Select Quiz Length (25 max):
      </label>
      <input
        type="text"
        id="integerField"
        className="block w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default QuizLengthSelection;
