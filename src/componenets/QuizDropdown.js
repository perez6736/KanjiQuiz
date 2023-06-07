import React, { useState } from "react";

const QuizDropdown = ({ handleDropdownChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    handleDropdownChange(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="dropdown"
        className="block mb-2 text-lg font-medium text-gray-700"
      >
        Select an option:
      </label>
      <select
        id="dropdown"
        className="block w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Please select</option>
        <option value="jouyou">Jouyou</option>
        <option value="jlpt">JLPT</option>
        <option value="heisig">Heisig</option>
      </select>
    </div>
  );
};

export default QuizDropdown;
