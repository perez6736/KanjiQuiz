import Header from "./Header";
import QuizResultsPage from "../pages/QuizResultsPage";
import QuizSelectionPage from "../pages/QuizSelectionPage";
import QuizPage from "../pages/QuizPage";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <QuizSelectionPage />
    </div>
  );
}

export default App;
