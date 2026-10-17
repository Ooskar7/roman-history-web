// Chronological options are stored earliest first; QuizGame mixes them for play.
const choice = (id, character, prompt, options, answer, explanation) => ({ id, character, type: 'choice', prompt, options, answer, explanation });
const truth = (id, character, prompt, answer, explanation) => ({ id, character, type: 'boolean', prompt, options: ['True', 'False'], answer: answer ? 0 : 1, explanation });
const order = (id, character, prompt, options, explanation) => ({ id, character, type: 'order', prompt, options, answer: [0, 1, 2, 3], explanation });

export const characters = [
  { id: 'caesar', name: 'Julius Caesar' },
  { id: 'marcus', name: 'Marcus Aurelius' },
  { id: 'scipio', name: 'Scipio Africanus' },
  { id: 'augustus', name: 'Augustus' },
  { id: 'seneca', name: 'Seneca the Younger' },
];

export const characterQuizQuestions = [
  choice('caesar-gaul', 'caesar', 'Which region did Julius Caesar conquer in the campaigns that established his military reputation?', ['Egypt', 'Gaul', 'Dacia', 'Britain'], 1, 'Caesar’s conquest of Gaul brought him wealth, military prestige, and a loyal army.'),
  choice('caesar-rival', 'caesar', 'Which former ally became Caesar’s principal rival in the civil war beginning in 49 BC?', ['Hannibal', 'Nero', 'Pompey', 'Trajan'], 2, 'Pompey sided with Caesar’s senatorial opponents and became his principal rival in the civil war.'),
  truth('caesar-dictator', 'caesar', 'Julius Caesar held the office of dictator during the late Republic.', true, 'Caesar concentrated power as dictator; he was not Rome’s first emperor.'),
  truth('caesar-natural-death', 'caesar', 'Julius Caesar died peacefully of old age.', false, 'A group of senators assassinated Caesar on 15 March 44 BC.'),
  order('caesar-life', 'caesar', 'Order these milestones in Julius Caesar’s life.', ['Birth of Julius Caesar', 'Beginning of Caesar’s Gallic campaigns', 'Caesar crosses the Rubicon', 'Assassination of Caesar'], 'Caesar was born in 100 BC, began his Gallic campaigns in 58 BC, crossed the Rubicon in 49 BC, and was assassinated in 44 BC.'),

  choice('marcus-work', 'marcus', 'Which work contains Marcus Aurelius’s personal philosophical reflections?', ['The Aeneid', 'The Histories', 'The Gallic War', 'Meditations'], 3, 'Meditations collects Marcus Aurelius’s reflections on duty, character, and living according to reason.'),
  choice('marcus-school', 'marcus', 'Which philosophical tradition is most closely associated with Marcus Aurelius?', ['Stoicism', 'Epicureanism', 'Skepticism', 'Cyrenaicism'], 0, 'Marcus Aurelius was a Stoic, emphasizing virtue, self-discipline, and acceptance of what lies beyond our control.'),
  truth('marcus-son', 'marcus', 'Commodus was the biological son of Marcus Aurelius.', true, 'Commodus was Marcus Aurelius’s son and became sole emperor after his father’s death.'),
  truth('marcus-peace', 'marcus', 'Marcus Aurelius’s reign was entirely peaceful, with no major frontier wars.', false, 'Marcus spent much of his reign dealing with military threats, including wars along the Danube.'),
  order('marcus-life', 'marcus', 'Order these milestones in Marcus Aurelius’s life.', ['Birth of Marcus Aurelius', 'Marcus becomes emperor', 'Commodus becomes co-emperor with Marcus', 'Death of Marcus Aurelius'], 'Marcus was born in 121 AD, became emperor in 161, made Commodus co-emperor in 177, and died in 180.'),

  choice('scipio-opponent', 'scipio', 'Which commander did Scipio Africanus defeat at Zama?', ['Pyrrhus', 'Hannibal', 'Alaric', 'Mark Antony'], 1, 'Scipio defeated Hannibal at Zama in 202 BC, a decisive victory in the Second Punic War.'),
  choice('scipio-spain', 'scipio', 'Which Carthaginian stronghold in Spain did Scipio capture in 209 BC?', ['Alexandria', 'Syracuse', 'New Carthage', 'Athens'], 2, 'Scipio captured New Carthage, modern Cartagena, a major Carthaginian base in Spain.'),
  truth('scipio-africa', 'scipio', 'Scipio carried the war into North Africa before defeating Hannibal at Zama.', true, 'His African campaign forced Carthage to recall Hannibal from Italy.'),
  truth('scipio-aemilianus', 'scipio', 'Scipio Africanus was the commander who destroyed Carthage in 146 BC.', false, 'That was Scipio Aemilianus, a later commander. Scipio Africanus fought in the Second Punic War.'),
  order('scipio-campaigns', 'scipio', 'Order these milestones in Scipio Africanus’s campaigns.', ['Capture of New Carthage', 'Victory at Ilipa', 'Landing in North Africa', 'Victory at Zama'], 'Scipio captured New Carthage in 209 BC, won at Ilipa in 206, landed in Africa in 204, and defeated Hannibal at Zama in 202.'),

  choice('augustus-heir', 'augustus', 'Whose adopted heir was Octavian, the future Augustus?', ['Julius Caesar', 'Cicero', 'Marcus Aurelius', 'Scipio Africanus'], 0, 'Caesar named Octavian his adopted son and heir in his will.'),
  choice('augustus-alliance', 'augustus', 'Which two men joined Octavian in the Second Triumvirate?', ['Brutus and Cassius', 'Nerva and Trajan', 'Pompey and Crassus', 'Mark Antony and Lepidus'], 3, 'Octavian, Mark Antony, and Lepidus formed the Second Triumvirate in 43 BC.'),
  truth('augustus-first', 'augustus', 'Augustus is conventionally regarded as Rome’s first emperor.', true, 'His receipt of the title Augustus in 27 BC conventionally marks the beginning of the Empire.'),
  truth('augustus-actium', 'augustus', 'Augustus’s forces lost the Battle of Actium to Antony and Cleopatra.', false, 'Octavian’s forces won at Actium in 31 BC, paving the way for his sole rule.'),
  order('augustus-career', 'augustus', 'Order these milestones in Augustus’s career.', ['Formation of the Second Triumvirate', 'Victory at Actium', 'Receipt of the title Augustus', 'Death of Augustus'], 'The Triumvirate formed in 43 BC, Actium was fought in 31 BC, the title Augustus was granted in 27 BC, and Augustus died in 14 AD.'),

  choice('seneca-pupil', 'seneca', 'Which future emperor was tutored by Seneca the Younger?', ['Augustus', 'Nero', 'Hadrian', 'Titus'], 1, 'Seneca became Nero’s tutor and later served as an adviser during his reign.'),
  choice('seneca-exile', 'seneca', 'To which island was Seneca exiled under Claudius?', ['Sicily', 'Crete', 'Corsica', 'Cyprus'], 2, 'Seneca was exiled to Corsica in 41 AD and recalled in 49 AD.'),
  truth('seneca-stoic', 'seneca', 'Seneca the Younger was a Stoic philosopher as well as a Roman statesman.', true, 'Seneca combined a political career with philosophical writing on ethics and the good life.'),
  truth('seneca-emperor', 'seneca', 'Seneca the Younger ruled as Roman emperor after Nero.', false, 'Seneca was a writer and adviser, not an emperor. He died in 65 AD, before Nero’s reign ended.'),
  order('seneca-life', 'seneca', 'Order these events in Seneca’s life and career.', ['Exile to Corsica', 'Recall to tutor Nero', 'Nero becomes emperor with Seneca as an adviser', 'Death of Seneca'], 'Seneca was exiled in 41 AD, recalled in 49, advised Nero after his accession in 54, and died in 65.'),
];

// References supplement the existing biographies in backend resources.
export const characterQuizSources = [
  { label: 'Seneca the Younger', url: 'https://en.wikipedia.org/wiki/Seneca_the_Younger' },
  { label: 'Marcus Aurelius', url: 'https://en.wikipedia.org/wiki/Marcus_Aurelius' },
  { label: 'Scipio Africanus', url: 'https://en.wikipedia.org/wiki/Scipio_Africanus' },
];
