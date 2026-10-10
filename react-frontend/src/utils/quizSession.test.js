import assert from 'node:assert/strict';
import { quizQuestions, initialAnswer, isCorrectAnswer } from '../data/quizQuestions.js';
import { createQuizSession, quizModes } from './quizSession.js';

assert.equal(quizQuestions.length, 50);
assert.equal(new Set(quizQuestions.map(q => q.id)).size, 50);
assert.equal(new Set(quizQuestions.map(q => q.prompt)).size, 50);
for (const question of quizQuestions) {
  assert.ok(['choice', 'boolean', 'order'].includes(question.type));
  assert.equal(question.options.length, question.type === 'boolean' ? 2 : 4);
  assert.ok(question.explanation);
  assert.ok(isCorrectAnswer(question, question.answer));
  assert.ok(!isCorrectAnswer(question, initialAnswer(question)));
  if (question.type === 'order') {
    assert.deepEqual([...initialAnswer(question)].sort(), question.answer);
    assert.ok(!isCorrectAnswer(question, question.answer.slice(1)));
  } else {
    assert.ok(Number.isInteger(question.answer));
    assert.ok(question.answer >= 0 && question.answer < question.options.length);
  }
}
const original = JSON.stringify(quizQuestions);
for (const mode of quizModes) {
  for (const random of [() => 0, () => 0.5, () => 0.999999]) {
    const session = createQuizSession(mode.id, random);
    assert.equal(session.length, mode.count);
    assert.equal(new Set(session.map(q => q.id)).size, mode.count);
    assert.ok(session.every(q => quizQuestions.includes(q)));
  }
  assert.notDeepEqual(createQuizSession(mode.id, () => 0), createQuizSession(mode.id, () => 0.999999));
}
assert.deepEqual(new Set(createQuizSession('long').map(q => q.id)), new Set(quizQuestions.map(q => q.id)));
assert.equal(JSON.stringify(quizQuestions), original);
assert.throws(() => createQuizSession('invalid'), /Unknown quiz mode/);
