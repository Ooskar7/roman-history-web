import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import QuizGame from "../components/QuizGame";
import { createCharacterQuizModes } from "../utils/quizSession";
import { characters, characterQuizQuestions, characterQuizSources } from "../data/characterQuizQuestions";

const modes = [
  ...createCharacterQuizModes(characterQuizQuestions.length),
  { id: 'specific', label: 'Specific Character Quizz', selectCharacter: true },
];

export default function CharacterQuizPage() {
  return (
    <Layout
      title="Historical Roman Characters"
      subtitle="Discover the lives of influential people from the Roman world — Romans and the figures beyond Rome who shaped its history."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <Link to="/quiz-games" className="button-link secondary-button">Back to Roman Quizz Games</Link>
      <p>Earn one point per question. Take your time and learn from each answer.</p>
      <QuizGame
        title="Historical Roman Characters"
        bank={characterQuizQuestions}
        modes={modes}
        characters={characters}
        description={`Explore ${characters.length} characters through multiple choice, True / False, and chronological ordering. Choose 10, 25, or 50 random questions, or play all ${characterQuizQuestions.length} available questions with Full Quizz. Or choose Specific Character Quizz to focus on one person. Every game uses a random order without repeats.`}
      />
      <details>
        <summary>Further reading</summary>
        <p>Questions draw on the site’s character biographies and these additional references.</p>
        <ul>{characterQuizSources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
      </details>
    </Layout>
  );
}
