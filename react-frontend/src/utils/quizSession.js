import { quizQuestions } from '../data/quizQuestions.js';

export const quizModes = [
  { id: 'short', label: 'Short Quizz', count: 10 },
  { id: 'medium', label: 'Medium Quizz', count: 25 },
  { id: 'long', label: 'Long Quizz', count: 50 },
];

// Fisher–Yates: sample without repeats and leave the source bank untouched.
export function createQuizSession(modeId, random = Math.random) {
  const mode = quizModes.find(mode => mode.id === modeId);
  if (!mode) throw new Error('Unknown quiz mode');
  const shuffled = [...quizQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, mode.count);
}
