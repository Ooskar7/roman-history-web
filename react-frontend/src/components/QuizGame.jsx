import { useEffect, useRef, useState } from 'react';
import { initialAnswer, isCorrectAnswer, quizQuestions } from '../data/quizQuestions';

const typeLabels = { choice: 'Multiple choice', boolean: 'True or false', order: 'Chronological order' };

export default function QuizGame() {
  const [phase, setPhase] = useState('intro');
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const heading = useRef(null);
  const question = quizQuestions[index];
  const correct = checked && isCorrectAnswer(question, answer);

  useEffect(() => {
    if (phase !== 'intro') heading.current?.focus();
  }, [phase, index]);

  function start() {
    setIndex(0);
    setScore(0);
    setAnswer(initialAnswer(quizQuestions[0]));
    setChecked(false);
    setPhase('playing');
  }

  function check(event) {
    event.preventDefault();
    if (checked || answer === null) return;
    if (isCorrectAnswer(question, answer)) setScore(value => value + 1);
    setChecked(true);
  }

  function next() {
    if (index === quizQuestions.length - 1) {
      setPhase('finished');
      return;
    }
    setIndex(index + 1);
    setAnswer(initialAnswer(quizQuestions[index + 1]));
    setChecked(false);
  }

  function move(position, direction) {
    const updated = [...answer];
    const target = position + direction;
    [updated[position], updated[target]] = [updated[target], updated[position]];
    setAnswer(updated);
  }

  return (
    <section className="card quiz-game" aria-labelledby="quiz-title">
      <h2 id="quiz-title">Quizz Game</h2>
      {phase === 'intro' && <>
        <p>How well do you know ancient Rome? Travel from its legendary kings to the fall of the Western Empire.</p>
        <p className="quiz-meta">20 questions · Multiple choice · True / False · Order the events</p>
        <p>Earn one point per question and discover the story behind each answer. No timer — take your time.</p>
        <button className="button-link" onClick={start}>Start Quizz Game</button>
      </>}
      {phase === 'playing' && <>
        <div className="quiz-status"><span>Question {index + 1} of {quizQuestions.length}</span><span>Score: {score} / {quizQuestions.length}</span></div>
        <progress className="quiz-progress" value={index + (checked ? 1 : 0)} max={quizQuestions.length} aria-label="Questions completed" />
        <p className="quiz-meta">{typeLabels[question.type]}</p>
        <h3 ref={heading} tabIndex={-1}>{question.prompt}</h3>
        <form onSubmit={check}>
          {question.type === 'order' ? <>
            <p id="quiz-order-help">Use the arrows to arrange events from earliest (top) to latest (bottom), then check your answer.</p>
            <ol className="quiz-order" aria-describedby="quiz-order-help">
              {answer.map((option, position) => <li key={option}>
                <span className="quiz-order-text"><strong>{position + 1}.</strong> {question.options[option]}</span>
                <span className="quiz-move-buttons">
                  <button type="button" disabled={checked || position === 0} onClick={() => move(position, -1)} aria-label={`Move ${question.options[option]} earlier`}>↑</button>
                  <button type="button" disabled={checked || position === answer.length - 1} onClick={() => move(position, 1)} aria-label={`Move ${question.options[option]} later`}>↓</button>
                </span>
              </li>)}
            </ol>
          </> : <fieldset className="quiz-options" disabled={checked}>
            <legend>Choose one answer</legend>
            {question.options.map((option, optionIndex) => <label key={option} className={`quiz-option${answer === optionIndex ? ' selected' : ''}`}>
              <input type="radio" name={`quiz-${question.id}`} value={optionIndex} checked={answer === optionIndex} onChange={() => setAnswer(optionIndex)} />
              <span>{option}</span>
            </label>)}
          </fieldset>}
          {!checked && <button className="button-link" disabled={answer === null} type="submit">Check answer</button>}
        </form>
        {checked && <>
          <div className={`quiz-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
            <strong>{correct ? 'Correct! +1 point' : 'Not quite — keep going!'}</strong>
            {!correct && <p>Correct answer: {question.type === 'order' ? question.answer.map(option => question.options[option]).join(' → ') : question.options[question.answer]}</p>}
            <p>{question.explanation}</p>
          </div>
          <button className="button-link" onClick={next}>{index === quizQuestions.length - 1 ? 'See results' : 'Next question'}</button>
        </>}
      </>}
      {phase === 'finished' && <>
        <h3 ref={heading} tabIndex={-1}>Quizz complete!</h3>
        <p className="quiz-result">{score} / {quizQuestions.length} <span>({Math.round(score / quizQuestions.length * 100)}%)</span></p>
        <p>{score === quizQuestions.length ? 'A perfect score! You know your Roman history.' : score >= 14 ? 'Well done! You have a strong grasp of Roman history.' : 'Every answer is a chance to learn. Explore the historical periods and try again!'}</p>
        <button className="button-link" onClick={start}>Play again</button>
      </>}
    </section>
  );
}
