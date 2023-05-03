import React from "react";

function Kanji({ kanji }) {
  return (
    <h1 className="text-6xl font-bold font-kanji">{kanji.kanjiData.kanji}</h1>
  );
}

export default Kanji;
