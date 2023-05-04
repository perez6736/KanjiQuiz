import { useEffect, useContext, useState } from "react";
import KanjiContext from "../context/kanji";
import Header from "./Header";
import KanjiCard from "./KanjiCard";

function App() {
  const { kanjis, fetchKanjisJouyou1 } = useContext(KanjiContext);

  useEffect(() => {
    fetchKanjisJouyou1();
  }, [fetchKanjisJouyou1]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <KanjiCard />
    </div>
  );
}

export default App;
