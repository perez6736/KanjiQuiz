const ResultsList = ({ children, headerText }) => {
  return (
    <div className="bg-gray-200 min-h-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{headerText}</h1>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(35px, 1fr))",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ResultsList;
