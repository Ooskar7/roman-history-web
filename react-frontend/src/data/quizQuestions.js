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
  choice('numa', 'Which legendary king of Rome was especially associated with religion and peace?', ['Tullus Hostilius', 'Numa Pompilius', 'Tarquinius Superbus', 'Romulus'], 1, 'Roman tradition presents Numa Pompilius as a peaceful ruler who organized religious institutions and rituals.'),
  choice('alba', 'Which city was traditionally destroyed under Tullus Hostilius?', ['Carthage', 'Alexandria', 'Alba Longa', 'Corinth'], 2, 'According to Roman tradition, Tullus destroyed Alba Longa and transferred its population to Rome.'),
  choice('palatine', 'Which hill did Romulus choose for his city in the foundation legend?', ['Palatine', 'Aventine', 'Capitoline', 'Quirinal'], 0, 'In the legend, Romulus favored the Palatine Hill, while Remus preferred the Aventine.'),
  choice('numitor', 'Whom did Romulus and Remus restore to the throne of Alba Longa?', ['Amulius', 'Servius Tullius', 'Ancus Marcius', 'Numitor'], 3, 'The twins overthrew Amulius and restored their grandfather Numitor.'),
  choice('sicily', 'Which island became Rome’s first province outside mainland Italy after the First Punic War?', ['Crete', 'Cyprus', 'Sicily', 'Britain'], 2, 'Rome gained Sicily after defeating Carthage in the First Punic War.'),
  choice('corvus', 'What was the corvus used for in Roman naval warfare?', ['Boarding enemy ships', 'Measuring water depth', 'Launching fire signals', 'Storing grain'], 0, 'The corvus was a boarding device that allowed Roman soldiers to fight aboard enemy ships.'),
  choice('zama', 'Who defeated Hannibal at Zama?', ['Julius Caesar', 'Scipio Africanus', 'Mark Antony', 'Cincinnatus'], 1, 'Scipio Africanus defeated Hannibal at Zama in 202 BC.'),
  choice('cannae', 'Which battle in 216 BC was a major Roman defeat against Hannibal?', ['Actium', 'Philippi', 'Zama', 'Cannae'], 3, 'Hannibal destroyed a large Roman army at Cannae in 216 BC.'),
  choice('social-citizenship', 'What was a central demand of Rome’s Italian allies before the Social War?', ['A new royal dynasty', 'Roman citizenship', 'The destruction of Sicily', 'An end to all sea trade'], 1, 'Italian allies wanted the legal and political rights of Roman citizenship.'),
  choice('cincinnatus', 'What made Cincinnatus an example of civic virtue in Roman tradition?', ['He made himself king', 'He conquered Egypt', 'He surrendered emergency power and returned to private life', 'He abolished the Senate'], 2, 'Cincinnatus was remembered for giving up his dictatorship after resolving a military emergency.'),
  choice('triumvirate', 'Who joined Octavian and Mark Antony in the Second Triumvirate?', ['Lepidus', 'Cicero', 'Hannibal', 'Nerva'], 0, 'Octavian, Antony, and Lepidus formed the Second Triumvirate after Caesar’s death.'),
  choice('actium-opponents', 'Whose forces did Octavian defeat at Actium?', ['Brutus and Cassius', 'Nerva and Trajan', 'Romulus and Remus', 'Mark Antony and Cleopatra'], 3, 'Octavian’s forces defeated Antony and Cleopatra at the naval Battle of Actium in 31 BC.'),
  choice('trajan-extent', 'Under which emperor did Rome reach its greatest territorial extent?', ['Hadrian', 'Trajan', 'Nero', 'Diocletian'], 1, 'Trajan expanded the Empire to its greatest territorial extent, including conquests in Dacia and the East.'),
  choice('hadrian-wall', 'Which emperor is associated with a frontier wall in Britain?', ['Augustus', 'Titus', 'Hadrian', 'Theodosius I'], 2, 'Hadrian emphasized consolidation and frontier defenses, including Hadrian’s Wall in Britain.'),
  choice('philosopher', 'Which of the Five Good Emperors is remembered as a philosopher-emperor?', ['Marcus Aurelius', 'Nerva', 'Trajan', 'Antoninus Pius'], 0, 'Marcus Aurelius combined philosophical reflection with the responsibilities of imperial rule.'),
  truth('numa-war', 'Roman tradition portrays Numa Pompilius primarily as a king of military conquest.', false, 'Numa was remembered for peace and religious organization; Tullus Hostilius was associated with warfare.'),
  truth('amulius', 'In the foundation legend, Amulius was overthrown before Rome was founded.', true, 'Romulus and Remus restored Numitor at Alba Longa before setting out to found their own city.'),
  truth('punic-rival', 'The Punic Wars were fought between Rome and Carthage.', true, 'Rome and Carthage fought three Punic Wars for power in the Mediterranean.'),
  truth('zama-winner', 'Hannibal defeated Scipio Africanus at the Battle of Zama.', false, 'Scipio defeated Hannibal at Zama in 202 BC, helping bring the Second Punic War to an end.'),
  truth('social-foreign', 'The Social War was a rebellion by many of Rome’s Italian allies.', true, 'The allies, or socii, rebelled over exclusion from full Roman citizenship.'),
  truth('caesar-peace', 'Caesar’s assassination immediately restored stable Republican government.', false, 'His assassination led to further civil wars, eventually leaving Octavian dominant.'),
  truth('cleopatra-egypt', 'Cleopatra VII was a ruler of Egypt.', true, 'Cleopatra ruled Egypt and allied with Mark Antony during the struggle against Octavian.'),
  truth('cicero-proscriptions', 'Cicero was killed during the proscriptions of the Second Triumvirate.', true, 'Cicero was among the victims of the triumvirs’ political purges.'),
  truth('hadrian-expansion', 'Hadrian is chiefly associated with expanding Rome beyond Trajan’s conquests.', false, 'Hadrian shifted toward consolidating the Empire and strengthening its frontiers.'),
  truth('commodus-adoption', 'Marcus Aurelius was succeeded by his adopted son Trajan.', false, 'Marcus Aurelius was succeeded by his biological son Commodus. Trajan had ruled earlier.'),
  order('first-kings', 'Order these legendary kings by the beginning of their reigns.', ['Romulus', 'Numa Pompilius', 'Tullus Hostilius', 'Ancus Marcius'], 'Roman tradition lists Romulus, Numa, Tullus, and Ancus as Rome’s first four kings, in that order.'),
  order('hannibal-campaign', 'Order these milestones of the Second Punic War.', ['Hannibal crosses the Alps', 'Battle of Cannae', 'Battle of Zama', 'Peace settlement ending the war'], 'Hannibal crossed the Alps in 218 BC; Cannae followed in 216 BC, Zama in 202 BC, and peace in 201 BC.'),
  order('octavian-rise', 'Order these events after Caesar’s assassination.', ['Formation of the Second Triumvirate', 'Battle of Philippi', 'Battle of Actium', 'Fall of Alexandria to Octavian'], 'The Triumvirate formed in 43 BC, Philippi took place in 42 BC, Actium in 31 BC, and Alexandria fell in 30 BC.'),
  order('good-emperors', 'Order these emperors by the beginning of their reigns.', ['Nerva', 'Trajan', 'Hadrian', 'Antoninus Pius'], 'The succession ran from Nerva to Trajan, then Hadrian, then Antoninus Pius; Marcus Aurelius followed.'),
  order('republic-milestones', 'Order these developments during the Republic.', ['Creation of the Twelve Tables', 'First Punic War begins', 'Social War begins', 'Assassination of Julius Caesar'], 'The Twelve Tables date to the mid-fifth century BC, the First Punic War began in 264 BC, the Social War in 91 BC, and Caesar was assassinated in 44 BC.'),
];

export function isCorrectAnswer(question, answer) {
  return question.type === 'order'
    ? Array.isArray(answer) && answer.length === question.answer.length && answer.every((value, index) => value === question.answer[index])
    : answer === question.answer;
}

export function initialAnswer(question) {
  return question.type === 'order' ? [2, 0, 3, 1] : null;
}
