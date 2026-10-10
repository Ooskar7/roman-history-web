import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import QuizGame from "../components/QuizGame";

function QuizPage() {
  return (
    <Layout
      title="Quizz Game"
      subtitle="Test your knowledge of Rome, from its legendary kings to the fall of the Western Empire."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <Link to="/" className="button-link secondary-button">
        Back to Home
      </Link>
      <p>
        Earn one point per question and discover the story behind each answer.
        No timer — take your time.
      </p>
      <QuizGame />
    </Layout>
  );
}

export default QuizPage;
