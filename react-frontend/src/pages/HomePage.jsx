import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { characters, characterQuizQuestions } from "../data/characterQuizQuestions";

function HomePage() {
  return (
    <Layout
      title="Roman Empire History"
      subtitle="Explore the history of Rome from the Monarchy to the Empire."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <div className="card home-feature-card">
        <h2>Welcome</h2>
        <p>
          This React version of the project presents the main historical periods
          of ancient Rome and their important events.
        </p>

        <Link to="/periods" className="button-link">
          View Historical Periods
        </Link>
      </div>

      <div className="cards-container home-feature-grid">
        <div className="card home-feature-card">
          <h2>Historical Political Map</h2>
          <p>
            Explore how Roman territory changed from the city's foundation to the
            fall of the Western Roman Empire.
          </p>
          <Link to="/historical-map" className="button-link">
            Open Historical Political Map
          </Link>
        </div>
        <section className="card home-feature-card" aria-labelledby="roman-games-title">
          <h2 id="roman-games-title">Roman Quizz Games</h2>
          <p>Choose your challenge: multiple choice, True / False, and chronological ordering.</p>
          <div className="home-quiz-games">
            <section className="home-quiz-game" aria-labelledby="general-game-title">
              <h3 id="general-game-title">General Roman Knowledge</h3>
              <p>
                Test your knowledge of ancient Rome with 50 questions.
                Choose a short, medium, or long game.
              </p>
              <Link to="/quiz" className="button-link">
                Play General Roman Knowledge
              </Link>
            </section>
            <section className="home-quiz-game" aria-labelledby="character-game-title">
              <h3 id="character-game-title">Historical Roman Characters</h3>
              <p>
                Explore {characters.length} influential figures with a bank of
                {" "}{characterQuizQuestions.length} questions. Choose 10, 25, 50,
                or the full collection.
              </p>
              <Link to="/quiz/characters" className="button-link">
                Play Historical Roman Characters
              </Link>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
