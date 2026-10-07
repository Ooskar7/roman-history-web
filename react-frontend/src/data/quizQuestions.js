// Questions follow the events and figures in backend/src/main/resources/content.
const choice = (id, prompt, options, answer, explanation) => ({ id, type: 'choice', prompt, options, answer, explanation });
const truth = (id, prompt, answer, explanation) => ({ id, type: 'boolean', prompt, options: ['True', 'False'], answer: answer ? 0 : 1, explanation });
// Chronology options are stored from earliest to latest and mixed for play.
const order = (id, prompt, options, explanation) => ({ id, type: 'order', prompt, options, answer: options.map((_, i) => i), explanation });

export const quizQuestions = [
  choice('founder', 'According to Roman tradition, who founded Rome?', ['Remus', 'Romulus', 'Augustus', 'Julius Caesar'], 1, 'Romulus is the legendary founder and first king of Rome. The foundation story is traditionally dated to 753 BC.'),
  truth('twins', 'Romulus and Remus were said to have been suckled by a she-wolf.', true, 'The she-wolf caring for the twins is a central part of Rome’s foundation legend.'),
  choice('last-king', 'Who was the last king of Rome?', ['Numa Pompilius', 'Ancus Marcius', 'Tarquinius Superbus', 'Servius Tullius'], 2, 'Tarquinius Superbus, or Tarquin the Proud, was expelled in 509 BC according to Roman tradition.'),
  order('early-rome', 'Put these early Roman events in chronological order.', ['Legendary founding of Rome', 'Reign of Ancus Marcius', 'Assassination of Servius Tullius', 'Expulsion of Tarquinius Superbus'], 'The traditional sequence is Rome’s founding (753 BC), Ancus Marcius (640–616 BC), Servius Tullius’s assassination (535 BC), and the expulsion of the last king (509 BC).'),
  truth('republic', 'The expulsion of Rome’s last king marked the beginning of the Republic.', true, 'Roman tradition dates the transition from monarchy to republic to 509 BC.'),
  choice('tables', 'What were the Twelve Tables?', ['A collection of written Roman laws', 'Twelve military formations', 'The first Roman provinces', 'A council of twelve emperors'], 0, 'The Twelve Tables were a written statement of Roman law, traditionally dated to 451–450 BC.'),
  choice('hannibal', 'Which Carthaginian commander crossed the Alps during the Second Punic War?', ['Scipio Africanus', 'Pyrrhus', 'Cato the Elder', 'Hannibal Barca'], 3, 'Hannibal crossed the Alps into Italy in 218 BC during the Second Punic War.'),
  order('republic-wars', 'Order these Republican conflicts from earliest to latest.', ['Pyrrhic War', 'First Punic War', 'Second Punic War', 'Third Punic War'], 'The Pyrrhic War (beginning in 280 BC) preceded the First (264–241 BC), Second (218–201 BC), and Third Punic Wars (149–146 BC).'),
  truth('carthage', 'Carthage was destroyed at the end of the First Punic War.', false, 'Carthage was destroyed in 146 BC at the end of the Third Punic War.'),
  choice('caesar', 'On which date was Julius Caesar assassinated?', ['15 March 44 BC', '21 April 753 BC', '2 September 31 BC', '15 March 27 BC'], 0, 'Caesar was assassinated on the Ides of March: 15 March 44 BC.'),
  truth('caesar-emperor', 'Julius Caesar was Rome’s first emperor.', false, 'Augustus is regarded as Rome’s first emperor. Caesar held extraordinary power as dictator during the late Republic.'),
  order('republic-empire', 'Order these turning points in the rise of the Empire.', ['Destruction of Carthage', 'Assassination of Julius Caesar', 'Battle of Actium', 'Octavian receives the title Augustus'], 'Carthage fell in 146 BC, Caesar was killed in 44 BC, Actium took place in 31 BC, and Octavian received the title Augustus in 27 BC.'),
  choice('augustus', 'What was Augustus known as before receiving that title?', ['Nero', 'Octavian', 'Titus', 'Hadrian'], 1, 'Octavian received the title Augustus in 27 BC, the conventional starting point of the Roman Empire.'),
  truth('nero', 'The Great Fire of Rome occurred during Nero’s reign.', true, 'The Great Fire devastated Rome in 64 AD, during Nero’s reign.'),
  choice('tetrarchy', 'Which emperor introduced the Tetrarchy?', ['Trajan', 'Constantine', 'Diocletian', 'Marcus Aurelius'], 2, 'Diocletian established a system of four rulers, the Tetrarchy, in 293 AD to help govern and defend the Empire.'),
  order('imperial-events', 'Arrange these imperial events from earliest to latest.', ['Beginning of Augustus’s rule as emperor', 'Great Fire of Rome', 'Establishment of the Tetrarchy', 'Edict of Milan'], 'The sequence is Augustus (27 BC), the Great Fire (64 AD), the Tetrarchy (293 AD), and the Edict of Milan (313 AD).'),
  truth('milan', 'The Edict of Milan is associated with religious toleration for Christians.', true, 'Constantine and Licinius agreed on religious toleration in 313 AD. Christianity becoming the state religion was a later development.'),
  choice('sack', 'Who led the Visigoths in the sack of Rome in 410 AD?', ['Odoacer', 'Alaric', 'Vespasian', 'Brennus'], 1, 'Alaric led the Visigoths when they sacked Rome in 410 AD.'),
  truth('fall', 'The deposition of Romulus Augustulus in 476 AD ended the Eastern Roman Empire.', false, '476 AD is the conventional date for the fall of the Western Roman Empire. The Eastern Roman Empire continued.'),
  order('late-empire', 'Put these late imperial events in chronological order.', ['Edict of Milan', 'Division of the Empire after Theodosius I’s death', 'Visigothic sack of Rome', 'Deposition of Romulus Augustulus'], 'The Edict of Milan (313 AD) came before the division of 395 AD, the sack of 410 AD, and the deposition of 476 AD.'),
];

export function isCorrectAnswer(question, answer) {
  return question.type === 'order'
    ? Array.isArray(answer) && answer.length === question.answer.length && answer.every((value, index) => value === question.answer[index])
    : answer === question.answer;
}

export function initialAnswer(question) {
  return question.type === 'order' ? [2, 0, 3, 1] : null;
}
