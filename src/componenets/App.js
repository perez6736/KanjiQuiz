import React from "react";
import Kanji from "./Kanji";
import Header from "./Header";
import Button from "./Button";

function App() {
  const handleShowAnswer = () => {
    console.log("show answer was pressed.");
  };

  return (
    <div className="flex flex-col h-screen bg-slate-200">
      <Header />
      <Kanji />
      <Button primary> Show Answer </Button>
    </div>
  );
}

export default App;
