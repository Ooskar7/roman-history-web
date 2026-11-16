import { quizQuestions } from '../data/quizQuestions.js';

export const quizModes = [
  { id: 'short', label: 'Short Quizz', count: 10 },
  { id: 'medium', label: 'Medium Quizz', count: 25 },
  { id: 'long', label: 'Long Quizz', count: 50 },
];

export function createCharacterQuizModes(questionCount) {
  return [
    { id: 'short', label: 'Short Quizz', count: 10 },
    { id: 'medium', label: 'Medium Quizz', count: 25 },
    { id: 'long', label: 'Long Quizz', count: 50 },
    { id: 'full', label: 'Full Quizz', count: questionCount },
  ];
}

export function createSpecificCharacterMode(characterId, bank) {
  const count = bank.filter(question => question.character === characterId).length;
  if (!characterId || count === 0) throw new Error('Choose an available character');
  return { id: 'specific', label: 'Specific Character Quizz', character: characterId, count };
}

// Fisher–Yates: sample without repeats and leave the source bank untouched.
export function createQuizSession(modeId, random = Math.random, bank = quizQuestions, modes = quizModes) {
  const mode = modes.find(mode => mode.id === modeId);
  if (!mode) throw new Error('Unknown quiz mode');
  const pool = mode.character ? bank.filter(question => question.character === mode.character) : bank;
  if (mode.count > pool.length) throw new Error('Not enough questions for quiz mode');
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, mode.count);
}
