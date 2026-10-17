import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PeriodsPage from "./pages/PeriodsPage";
import PeriodDetailPage from "./pages/PeriodDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import FigureDetailPage from "./pages/FigureDetailPage";
import HistoricalMapPage from "./pages/HistoricalMapPage";

import QuizPage from "./pages/QuizPage";

import CharacterQuizPage from "./pages/CharacterQuizPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/periods" element={<PeriodsPage />} />
        <Route path="/period/:id" element={<PeriodDetailPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/figure/:id" element={<FigureDetailPage />} />
        <Route path="/quiz/characters" element={<CharacterQuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/historical-map" element={<HistoricalMapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
