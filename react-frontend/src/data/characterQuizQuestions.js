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
  { id: 'hannibal', name: 'Hannibal Barca' },
  { id: 'pyrrhus', name: 'Pyrrhus of Epirus' },
  { id: 'constantine', name: 'Constantine the Great' },
  { id: 'cicero', name: 'Cicero' },
  { id: 'virgil', name: 'Virgil' },
  { id: 'antony', name: 'Mark Antony' },
  { id: 'cleopatra', name: 'Cleopatra VII' },
  { id: 'spartacus', name: 'Spartacus' },
  { id: 'diocletian', name: 'Diocletian' },
  { id: 'justinian', name: 'Justinian I' },
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
  choice('hannibal-home', 'hannibal', 'Which Mediterranean power did Hannibal Barca serve?', ['Rome', 'Carthage', 'Macedonia', 'Egypt'], 1, 'Hannibal was a Carthaginian commander and one of Rome’s greatest opponents in the Second Punic War.'),
  choice('hannibal-cannae', 'hannibal', 'Which battle is famous for Hannibal’s encirclement of a large Roman army?', ['Actium', 'Philippi', 'Cannae', 'Beneventum'], 2, 'At Cannae in 216 BC, Hannibal surrounded and destroyed a much larger Roman force.'),
  truth('hannibal-alps', 'hannibal', 'Hannibal crossed the Alps with an army that included war elephants.', true, 'Hannibal’s invasion of Italy in 218 BC included an Alpine crossing with soldiers, cavalry, and elephants.'),
  truth('hannibal-zama', 'hannibal', 'Hannibal defeated Scipio Africanus at Zama.', false, 'Scipio Africanus defeated Hannibal at Zama in 202 BC.'),
  order('hannibal-campaign-order', 'hannibal', 'Order these events in Hannibal’s war against Rome.', ['Crossing the Alps', 'Victory at Cannae', 'Recall from Italy to defend Carthage', 'Defeat at Zama'], 'Hannibal crossed the Alps in 218 BC, won at Cannae in 216, returned to Africa in 203, and lost at Zama in 202.'),

  choice('pyrrhus-kingdom', 'pyrrhus', 'Of which kingdom was Pyrrhus the ruler best known for fighting Rome?', ['Epirus', 'Persia', 'Numidia', 'Pontus'], 0, 'Pyrrhus was a Hellenistic king of Epirus who campaigned against Rome in southern Italy.'),
  choice('pyrrhus-cost', 'pyrrhus', 'What does the expression “Pyrrhic victory” mean?', ['A victory without casualties', 'A victory won only at sea', 'A victory achieved by negotiation', 'A victory so costly that it undermines the winner'], 3, 'The phrase recalls Pyrrhus’s costly victories over Rome, which depleted troops he could not easily replace.'),
  truth('pyrrhus-tarentum', 'pyrrhus', 'Pyrrhus came to Italy after being invited to help Tarentum against Rome.', true, 'Tarentum sought Pyrrhus’s military support in its conflict with Rome.'),
  truth('pyrrhus-roman', 'pyrrhus', 'Pyrrhus served as a Roman consul during his campaigns in Italy.', false, 'Pyrrhus fought Rome as a foreign king, not as a Roman magistrate.'),
  order('pyrrhus-battles', 'pyrrhus', 'Order these events in Pyrrhus’s military career.', ['Battle of Heraclea', 'Battle of Asculum', 'Battle of Beneventum', 'Death of Pyrrhus at Argos'], 'Heraclea was fought in 280 BC, Asculum in 279, and Beneventum in 275. Pyrrhus died at Argos in 272 BC.'),

  choice('constantine-capital', 'constantine', 'Which city did Constantine develop as a new imperial capital?', ['Carthage', 'Constantinople', 'Alexandria', 'Antioch'], 1, 'Constantine rebuilt Byzantium as Constantinople, dedicating the city in 330 AD.'),
  choice('constantine-rival', 'constantine', 'Whom did Constantine defeat at the Battle of the Milvian Bridge?', ['Diocletian', 'Alaric', 'Maxentius', 'Theodosius I'], 2, 'Constantine defeated Maxentius near Rome in 312 AD.'),
  truth('constantine-nicaea', 'constantine', 'Constantine called the Council of Nicaea in 325 AD.', true, 'Constantine convened the council to address divisions within Christianity.'),
  truth('constantine-state-faith', 'constantine', 'Constantine’s agreement with Licinius in 313 AD made Christianity the Empire’s official state religion.', false, 'The agreement known as the Edict of Milan supported religious toleration. The establishment of Nicene Christianity as the imperial state religion came later under Theodosius I.'),
  order('constantine-career', 'constantine', 'Order these milestones in Constantine’s reign.', ['Proclamation as emperor by his troops', 'Victory at the Milvian Bridge', 'Council of Nicaea', 'Dedication of Constantinople'], 'Constantine was proclaimed emperor in 306 AD, won at the Milvian Bridge in 312, called the council in 325, and dedicated Constantinople in 330.'),

  choice('cicero-conspiracy', 'cicero', 'Which conspiracy did Cicero confront during his consulship?', ['The Pisonian conspiracy', 'The plot against Servius Tullius', 'The assassination of Commodus', 'The Catilinarian conspiracy'], 3, 'As consul in 63 BC, Cicero confronted Catiline’s conspiracy against the Republic.'),
  choice('cicero-talent', 'cicero', 'Which skill was especially central to Cicero’s public career?', ['Oratory and legal advocacy', 'Naval engineering', 'Chariot racing', 'Military siegecraft'], 0, 'Cicero rose through his skill as a speaker and advocate, and his speeches became models of Latin prose.'),
  truth('cicero-consul', 'cicero', 'Cicero held the office of consul in the Roman Republic.', true, 'Cicero served as consul in 63 BC.'),
  truth('cicero-imperial', 'cicero', 'Cicero lived to serve as a senator under Emperor Augustus after 27 BC.', false, 'Cicero was killed during the proscriptions in 43 BC, before Octavian received the title Augustus.'),
  order('cicero-career', 'cicero', 'Order these milestones in Cicero’s life.', ['Consulship of Cicero', 'Departure into exile', 'Recall from exile', 'Death during the proscriptions'], 'Cicero was consul in 63 BC, went into exile in 58, returned in 57, and was killed in 43.'),

  choice('virgil-epic', 'virgil', 'Which epic poem was written by Virgil?', ['The Iliad', 'The Aeneid', 'Metamorphoses', 'The Odyssey'], 1, 'Virgil wrote the Aeneid, an epic about Aeneas and the origins of the people who would become the Romans.'),
  choice('virgil-georgics', 'virgil', 'What is the principal subject of Virgil’s Georgics?', ['Naval battles', 'Roman courtroom speeches', 'Agriculture and rural work', 'The life of Julius Caesar'], 2, 'The Georgics is a didactic poem in four books about agriculture and rural labor.'),
  truth('virgil-latin', 'virgil', 'Virgil composed his major poems in Latin.', true, 'Virgil was a Roman poet whose Eclogues, Georgics, and Aeneid are major works of Latin literature.'),
  truth('virgil-homer', 'virgil', 'Virgil wrote the Homeric poems the Iliad and the Odyssey.', false, 'Those Greek epics are attributed to Homer. Virgil drew on the Homeric tradition when composing his own epic, the Aeneid.'),
  order('virgil-career', 'virgil', 'Order these stages of Virgil’s life and writing career.', ['Birth of Virgil', 'Composition of the Eclogues', 'Completion of the Georgics', 'Death of Virgil'], 'Virgil was born in 70 BC, composed the Eclogues in the late 40s and around 39 BC, completed the Georgics in 29 BC, and died in 19 BC.'),

  choice('antony-allies', 'antony', 'Who joined Mark Antony in the Second Triumvirate?', ['Pompey and Crassus', 'Brutus and Cassius', 'Octavian and Lepidus', 'Cicero and Cato'], 2, 'Antony, Octavian, and Lepidus formed the Second Triumvirate in 43 BC.'),
  choice('antony-queen', 'antony', 'Which queen became Mark Antony’s political ally and partner?', ['Cleopatra VII', 'Boudica', 'Zenobia', 'Arsinoe II'], 0, 'Antony allied with Cleopatra VII of Egypt during his struggle for power in the eastern Mediterranean.'),
  truth('antony-caesar', 'antony', 'Mark Antony served as an ally and military lieutenant of Julius Caesar.', true, 'Antony supported Caesar during the civil wars before becoming a leading figure after Caesar’s assassination.'),
  truth('antony-actium-win', 'antony', 'Mark Antony defeated Octavian’s forces at Actium.', false, 'Antony and Cleopatra were defeated by Octavian’s forces at Actium in 31 BC.'),
  order('antony-career', 'antony', 'Order these milestones in Mark Antony’s career.', ['Formation of the Second Triumvirate', 'Victory over Brutus and Cassius at Philippi', 'Defeat at Actium', 'Death of Mark Antony in Egypt'], 'The Triumvirate formed in 43 BC, Philippi followed in 42, Actium in 31, and Antony died in Egypt in 30.'),

  choice('cleopatra-dynasty', 'cleopatra', 'To which dynasty did Cleopatra VII belong?', ['Julio-Claudian', 'Ptolemaic', 'Flavian', 'Severan'], 1, 'Cleopatra belonged to the Ptolemaic dynasty, which ruled Egypt after the conquests of Alexander the Great.'),
  choice('cleopatra-kingdom', 'cleopatra', 'Which kingdom did Cleopatra VII rule?', ['Numidia', 'Epirus', 'Pontus', 'Egypt'], 3, 'Cleopatra ruled Egypt, with Alexandria as her royal capital.'),
  truth('cleopatra-caesar-alliance', 'cleopatra', 'Cleopatra formed an alliance with Julius Caesar before her partnership with Mark Antony.', true, 'Cleopatra’s alliance with Caesar preceded her later political and personal partnership with Antony.'),
  truth('cleopatra-rome-ruler', 'cleopatra', 'Cleopatra became Rome’s first empress after winning at Actium.', false, 'Cleopatra and Antony lost at Actium. She remained Egypt’s queen until her death in 30 BC; she never became Rome’s empress.'),
  order('cleopatra-reign', 'cleopatra', 'Order these milestones in Cleopatra VII’s reign.', ['Accession to the Egyptian throne', 'Alliance with Julius Caesar in Alexandria', 'Defeat with Antony at Actium', 'Death of Cleopatra'], 'Cleopatra became queen in 51 BC, allied with Caesar in 48, was defeated at Actium in 31, and died in 30.'),

  choice('spartacus-school', 'spartacus', 'From which city’s gladiatorial school did Spartacus escape?', ['Rome', 'Athens', 'Capua', 'Carthage'], 2, 'Spartacus and other gladiators escaped from a training school at Capua in 73 BC.'),
  choice('spartacus-general', 'spartacus', 'Which Roman commander defeated Spartacus’s main army in 71 BC?', ['Marcus Licinius Crassus', 'Scipio Africanus', 'Trajan', 'Belisarius'], 0, 'Crassus led the Roman army that defeated Spartacus’s main force in 71 BC.'),
  truth('spartacus-revolt', 'spartacus', 'Spartacus was a leader of the uprising known as the Third Servile War.', true, 'The Third Servile War was a major revolt against the Roman Republic, led by Spartacus and other escaped gladiators.'),
  truth('spartacus-emperor', 'spartacus', 'Spartacus overthrew the Republic and ruled as Roman emperor.', false, 'His rebellion was defeated in 71 BC, decades before the beginning of the Roman Empire.'),
  order('spartacus-rebellion', 'spartacus', 'Order these stages of Spartacus’s rebellion.', ['Escape from the gladiatorial school at Capua', 'Defeat of Glaber’s force near Mount Vesuvius', 'Crassus takes command against the rebels', 'Final defeat of Spartacus’s main army'], 'The escape and victory near Vesuvius occurred in 73 BC, Crassus took command in 72, and the main rebel army was defeated in 71.'),

  choice('diocletian-system', 'diocletian', 'What was the four-ruler system established by Diocletian called?', ['The Principate', 'The Tetrarchy', 'The Triumvirate', 'The Decemvirate'], 1, 'The Tetrarchy divided imperial responsibilities among two senior Augusti and two junior Caesars.'),
  choice('diocletian-junior', 'diocletian', 'Who became Diocletian’s junior colleague, or Caesar, in 293 AD?', ['Augustus', 'Nero', 'Justinian', 'Galerius'], 3, 'Galerius served as Diocletian’s Caesar, while Constantius Chlorus served under Maximian.'),
  truth('diocletian-abdication', 'diocletian', 'Diocletian voluntarily abdicated in 305 AD.', true, 'Diocletian retired from imperial office in 305 AD, at the same time as Maximian.'),
  truth('diocletian-milan', 'diocletian', 'Diocletian issued the Edict of Milan together with Constantine.', false, 'The agreement of 313 AD was made by Constantine and Licinius. Diocletian had already abdicated.'),
  order('diocletian-reign', 'diocletian', 'Order these milestones in Diocletian’s reign.', ['Diocletian becomes emperor', 'Establishment of the four-ruler Tetrarchy', 'Beginning of the Great Persecution', 'Abdication of Diocletian'], 'Diocletian became emperor in 284 AD, established the Tetrarchy in 293, began the Great Persecution in 303, and abdicated in 305.'),

  choice('justinian-law', 'justinian', 'Which legal compilation is associated with Justinian I?', ['The Twelve Tables', 'The Magna Carta', 'The Corpus Juris Civilis', 'The Edict of Milan'], 2, 'Justinian sponsored the compilation of Roman law known as the Corpus Juris Civilis, or Body of Civil Law.'),
  choice('justinian-empress', 'justinian', 'Who was Justinian I’s wife and empress?', ['Theodora', 'Livia', 'Helena', 'Cleopatra'], 0, 'Theodora was Justinian’s wife and an influential empress at the court in Constantinople.'),
  truth('justinian-hagia', 'justinian', 'Justinian I ordered the rebuilding of Hagia Sophia after the Nika revolt.', true, 'After the destruction of 532 AD, Justinian commissioned the great church completed in 537.'),
  truth('justinian-west', 'justinian', 'Justinian I ruled the Western Roman Empire before its conventional fall in 476 AD.', false, 'Justinian ruled the Eastern Roman, or Byzantine, Empire from 527 to 565 AD, after the Western Empire’s fall.'),
  order('justinian-reign', 'justinian', 'Order these milestones in Justinian I’s reign.', ['Justinian becomes emperor', 'Nika revolt in Constantinople', 'Completion of Justinian’s Hagia Sophia', 'Death of Justinian'], 'Justinian became emperor in 527 AD, faced the Nika revolt in 532, completed Hagia Sophia in 537, and died in 565.'),
];

// References supplement the existing biographies in backend resources.
export const characterQuizSources = [
  { label: 'Mark Antony and Actium — Livius', url: 'https://www.livius.org/articles/battle/actium-31-bce/' },
  { label: 'Cleopatra VII', url: 'https://en.wikipedia.org/wiki/Cleopatra' },
  { label: 'Spartacus in ancient sources — Attalus', url: 'https://www.attalus.org/names/s/spartacus.html' },
  { label: 'Diocletian — De Imperatoribus Romanis', url: 'https://roman-emperors.sites.luc.edu/dioclet.htm' },
  { label: 'Justinian I — Metropolitan Museum of Art', url: 'https://www.metmuseum.org/pt/essays/the-byzantine-state-under-justinian-i-justinian-the-great' },
  { label: 'Hannibal timeline', url: 'https://www.worldhistory.org/timeline/hannibal/' },
  { label: 'Pyrrhus timeline', url: 'https://www.worldhistory.org/timeline/pyrrhus/' },
  { label: 'Constantine timeline', url: 'https://www.worldhistory.org/timeline/Constantine_I/' },
  { label: 'Cicero chronology — Dickinson College', url: 'https://dcc.dickinson.edu/cicero-de-imperio/chronological-table' },
  { label: 'Virgil — Dickinson College', url: 'https://dcc.dickinson.edu/vergil-eclogues/intro/intro' },
  { label: 'Seneca the Younger', url: 'https://en.wikipedia.org/wiki/Seneca_the_Younger' },
  { label: 'Marcus Aurelius', url: 'https://en.wikipedia.org/wiki/Marcus_Aurelius' },
  { label: 'Scipio Africanus', url: 'https://en.wikipedia.org/wiki/Scipio_Africanus' },
];
