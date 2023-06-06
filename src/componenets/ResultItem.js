const ResultItem = ({ kanji }) => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-4">
      <span className="font-bold text-xl">{kanji}</span>
    </div>
  );
};

export default ResultItem;
