import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { quizQuestions } from "../data/quizQuestions";
import { characters, characterQuizQuestions } from "../data/characterQuizQuestions";

const games = [
  {
    path: "/quiz",
    title: "General Roman Knowledge",
    description: `Test your knowledge of ancient Rome with ${quizQuestions.length} questions. Choose a short, medium, or long game.`,
  },
  {
    path: "/quiz/characters",
    title: "Historical Roman Characters",
    description: `Explore ${characters.length} influential figures with a bank of ${characterQuizQuestions.length} questions. Choose 10, 25, 50, the full collection, or a Specific Character Quizz.`,
  },
];

export default function QuizGamesPage() {
  return (
    <Layout
      title="Roman Quizz Games"
      subtitle="Choose your challenge: multiple choice, True / False, and chronological ordering."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <Link to="/" className="button-link secondary-button">
        Back to Home
      </Link>
      <div className="quiz-games-grid">
        {games.map(game => (
          <section key={game.path} className="quiz-game-card">
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <Link to={game.path} className="button-link">
              Play {game.title}
            </Link>
          </section>
        ))}
      </div>
    </Layout>
  );
}
