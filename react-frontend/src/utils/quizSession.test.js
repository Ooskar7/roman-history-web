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

// Character sessions must stay separate from general knowledge and retain
// exactly five questions, including all three formats, for each character.
const { characters, characterQuizQuestions } = await import('../data/characterQuizQuestions.js');
assert.equal(characters.length, 50);
assert.equal(characterQuizQuestions.length, 250);
assert.equal(new Set(characterQuizQuestions.map(q => q.id)).size, 250);
for (const character of characters) {
  const modes = [{ id: character.id, character: character.id, count: 5 }];
  const session = createQuizSession(character.id, () => 0.5, characterQuizQuestions, modes);
  assert.equal(session.length, 5);
  assert.ok(session.every(q => q.character === character.id));
  assert.equal(session.filter(q => q.type === 'choice').length, 2);
  assert.equal(session.filter(q => q.type === 'boolean').length, 2);
  assert.equal(session.filter(q => q.type === 'order').length, 1);
  for (const question of session) {
    assert.equal(question.options.length, question.type === 'boolean' ? 2 : 4);
    assert.ok(isCorrectAnswer(question, question.answer));
    assert.ok(!isCorrectAnswer(question, initialAnswer(question)));
    assert.ok(question.explanation);
  }
}
const characterSession = createQuizSession('all', () => 0, characterQuizQuestions, [{ id: 'all', count: characterQuizQuestions.length }]);
assert.deepEqual(new Set(characterSession), new Set(characterQuizQuestions));
assert.throws(() => createQuizSession('oversized', () => 0, characterQuizQuestions, [{ id: 'oversized', count: characterQuizQuestions.length + 1 }]), /Not enough questions/);

assert.equal(new Set(characters.map(c => c.id)).size, characters.length);
assert.equal(new Set(characterQuizQuestions.map(q => q.prompt)).size, characterQuizQuestions.length);
assert.ok(characterQuizQuestions.every(q => characters.some(c => c.id === q.character)));
for (const question of characterQuizQuestions) {
  assert.equal(new Set(question.options).size, question.options.length);
  if (question.type === 'order') {
    assert.deepEqual(question.answer, [0, 1, 2, 3]);
    assert.deepEqual([...initialAnswer(question)].sort(), question.answer);
  } else {
    assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length);
  }
}

const { createCharacterQuizModes } = await import('./quizSession.js');
const characterModes = createCharacterQuizModes(characterQuizQuestions.length);
assert.deepEqual(characterModes.map(mode => mode.count), [10, 25, 50, 250]);
const characterBankBefore = JSON.stringify(characterQuizQuestions);
for (const mode of characterModes) {
  const first = createQuizSession(mode.id, () => 0, characterQuizQuestions, characterModes);
  const second = createQuizSession(mode.id, () => 0.99999, characterQuizQuestions, characterModes);
  assert.equal(first.length, mode.count);
  assert.equal(new Set(first.map(q => q.id)).size, mode.count);
  assert.ok(first.every(q => characterQuizQuestions.includes(q)));
  assert.notDeepEqual(first, second);
  if (mode.id === 'full') assert.deepEqual(new Set(first), new Set(characterQuizQuestions));
}
assert.equal(JSON.stringify(characterQuizQuestions), characterBankBefore);
// Full mode automatically includes future additions to the bank.
const expandedBank = [...characterQuizQuestions, { ...characterQuizQuestions[0], id: 'future-character-question' }];
const expandedModes = createCharacterQuizModes(expandedBank.length);
assert.equal(createQuizSession('full', () => 0.5, expandedBank, expandedModes).length, 251);

const { createSpecificCharacterMode } = await import('./quizSession.js');
for (const character of characters) {
  const mode = createSpecificCharacterMode(character.id, characterQuizQuestions);
  const session = createQuizSession(mode.id, () => 0.5, characterQuizQuestions, [mode]);
  const expected = characterQuizQuestions.filter(question => question.character === character.id);
  assert.equal(session.length, 5);
  assert.deepEqual(new Set(session), new Set(expected));
}
assert.throws(() => createSpecificCharacterMode('', characterQuizQuestions), /Choose an available character/);
assert.throws(() => createSpecificCharacterMode('missing', characterQuizQuestions), /Choose an available character/);
assert.equal(createSpecificCharacterMode(expandedBank[0].character, expandedBank).count, 6);
