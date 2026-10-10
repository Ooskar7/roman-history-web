import { useEffect, useRef, useState } from 'react';
import { initialAnswer, isCorrectAnswer } from '../data/quizQuestions';

import { createQuizSession, quizModes } from '../utils/quizSession';

const typeLabels = { choice: 'Multiple choice', boolean: 'True or false', order: 'Chronological order' };

export default function QuizGame() {
  const [phase, setPhase] = useState('setup');
  const [modeId, setModeId] = useState('short');
  const [questions, setQuestions] = useState([]);
  const mode = quizModes.find(mode => mode.id === modeId);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const heading = useRef(null);
  const question = questions[index];
  const correct = checked && isCorrectAnswer(question, answer);

  useEffect(() => {
    heading.current?.focus();
  }, [phase, index]);

  function start() {
    const session = createQuizSession(modeId);
    setQuestions(session);
    setIndex(0);
    setScore(0);
    setAnswer(initialAnswer(session[0]));
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
    if (index === questions.length - 1) {
      setPhase('finished');
      return;
    }
    setIndex(index + 1);
    setAnswer(initialAnswer(questions[index + 1]));
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
      {phase === 'setup' && <>
        <h3 ref={heading} tabIndex={-1}>Choose your game mode</h3>
        <p>Explore a bank of 50 questions with multiple choice, True / False, and chronological ordering. Each game draws questions at random, without repeats.</p>
        <fieldset className="quiz-options">
          <legend>Game length</legend>
          {quizModes.map(option => <label key={option.id} className={`quiz-option${modeId === option.id ? ' selected' : ''}`}>
            <input type="radio" name="quiz-mode" value={option.id} checked={modeId === option.id} onChange={() => setModeId(option.id)} />
            <span><strong>{option.label}</strong><br />{option.count === 50 ? 'All 50 questions in random order' : `${option.count} random questions`}</span>
          </label>)}
        </fieldset>
        <button className="button-link" onClick={start}>Start {mode.label}</button>
      </>}
      {phase === 'playing' && <>
        <p className="quiz-meta">{mode.label}</p>
        <div className="quiz-status"><span>Question {index + 1} of {questions.length}</span><span>Score: {score} / {questions.length}</span></div>
        <progress className="quiz-progress" value={index + (checked ? 1 : 0)} max={questions.length} aria-label="Questions completed" />
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
          <button className="button-link" onClick={next}>{index === questions.length - 1 ? 'See results' : 'Next question'}</button>
        </>}
      </>}
      {phase === 'finished' && <>
        <h3 ref={heading} tabIndex={-1}>Quizz complete!</h3>
        <p className="quiz-result">{score} / {questions.length} <span>({Math.round(score / questions.length * 100)}%)</span></p>
        <p>{score === questions.length ? 'A perfect score! You know your Roman history.' : score / questions.length >= 0.7 ? 'Well done! You have a strong grasp of Roman history.' : 'Every answer is a chance to learn. Explore the historical periods and try again!'}</p>
        <button className="button-link" onClick={() => { setChecked(false); setPhase('setup'); }}>Play again / Choose mode</button>
      </>}
    </section>
  );
}
