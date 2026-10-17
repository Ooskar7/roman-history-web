import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import QuizGame from "../components/QuizGame";
import { characters, characterQuizQuestions, characterQuizSources } from "../data/characterQuizQuestions";

const modes = [
  { id: 'all', label: 'All Characters', count: characterQuizQuestions.length },
  ...characters.map(character => ({ id: character.id, character: character.id, label: character.name, count: 5 })),
];

export default function CharacterQuizPage() {
  return (
    <Layout
      title="Historical Roman Characters"
      subtitle="Discover the lives of influential people from the Roman world — Romans and the figures beyond Rome who shaped its history."
      backgroundImage="/images/backgrounds/map_117ad_background.png"
    >
      <Link to="/" className="button-link secondary-button">Back to Home</Link>
      <p>Earn one point per question. Take your time and learn from each answer.</p>
      <QuizGame
        title="Historical Roman Characters"
        bank={characterQuizQuestions}
        modes={modes}
        description="Choose all five characters for a 25-question game, or focus on one character with five questions. Each character has two multiple-choice questions, two True / False questions, and one chronology challenge. Questions appear in random order without repeats."
      />
      <details>
        <summary>Further reading</summary>
        <p>Questions draw on the site’s character biographies and these additional references.</p>
        <ul>{characterQuizSources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
      </details>
    </Layout>
  );
}
