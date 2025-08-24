export interface Philosopher {
  id: string;
  name: string;
  lifespan: string;
  school: string;
  nationality: string;
  biography: string;
  keyWorks: string[];
  portrait?: string;
  topics: Record<string, PhilosophicalPosition>;
}

export interface PhilosophicalPosition {
  stance: string;
  summary: string;
  keyQuote?: string;
  context: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  category: 'ethics' | 'metaphysics' | 'epistemology' | 'political' | 'aesthetics' | 'logic' | 'spirituality';
}

export const topics: Topic[] = [
  {
    id: 'consciousness',
    title: 'Consciousness',
    description: 'What is consciousness? How does subjective experience arise from physical processes?',
    category: 'metaphysics'
  },
  {
    id: 'suffering',
    title: 'The Nature of Suffering',
    description: 'Why do we suffer? Is suffering an inevitable part of existence?',
    category: 'ethics'
  },
  {
    id: 'meaning-purpose',
    title: 'Meaning and Purpose',
    description: 'What gives life meaning and purpose? How should we live a fulfilling life?',
    category: 'ethics'
  },
  {
    id: 'free-will',
    title: 'Free Will vs. Determinism',
    description: 'Do we have genuine choice in our actions, or are all events predetermined?',
    category: 'metaphysics'
  },
  {
    id: 'ethics-foundation',
    title: 'Foundation of Ethics',
    description: 'What makes actions right or wrong? Is morality universal or relative?',
    category: 'ethics'
  },
  {
    id: 'knowledge-truth',
    title: 'Nature of Knowledge',
    description: 'How do we know what we know? What is truth?',
    category: 'epistemology'
  },
  {
    id: 'mind-body',
    title: 'Mind-Body Problem',
    description: 'What is the relationship between mind and physical matter?',
    category: 'metaphysics'
  },
  {
    id: 'justice',
    title: 'Nature of Justice',
    description: 'What constitutes a just society? How should resources be distributed?',
    category: 'political'
  },
  {
    id: 'reality',
    title: 'Nature of Reality',
    description: 'What is the fundamental nature of existence? Is reality as we perceive it?',
    category: 'metaphysics'
  },
  {
    id: 'beauty',
    title: 'Beauty and Art',
    description: 'What makes something beautiful? What is the purpose of art in human life?',
    category: 'aesthetics'
  },
  {
    id: 'death',
    title: 'Death and Mortality',
    description: 'How should we understand death? What makes a life well-lived?',
    category: 'ethics'
  },
  {
    id: 'love',
    title: 'Love and Relationships',
    description: 'What is love? How do relationships contribute to human flourishing?',
    category: 'ethics'
  },
  {
    id: 'identity',
    title: 'Personal Identity',
    description: 'What makes you "you"? Do we have a persistent self over time?',
    category: 'metaphysics'
  },
  {
    id: 'language',
    title: 'Language and Meaning',
    description: 'How does language create meaning? What is the relationship between words and reality?',
    category: 'logic'
  },
  {
    id: 'time',
    title: 'Nature of Time',
    description: 'What is time? Is the present moment special, or are all times equally real?',
    category: 'metaphysics'
  },
  {
    id: 'god',
    title: 'God and Religion',
    description: 'Does God exist? What role should religion play in human life?',
    category: 'spirituality'
  },
  {
    id: 'freedom',
    title: 'Liberty and Freedom',
    description: 'What does it mean to be free? How much freedom should individuals have?',
    category: 'political'
  },
  {
    id: 'virtue',
    title: 'Virtue and Character',
    description: 'What virtues should we cultivate? How do we become good people?',
    category: 'ethics'
  },
  {
    id: 'happiness',
    title: 'Happiness and Well-being',
    description: 'What is true happiness? Can philosophy help us live better lives?',
    category: 'ethics'
  },
  {
    id: 'truth',
    title: 'Truth and Objectivity',
    description: 'Is there objective truth? How do we distinguish truth from opinion?',
    category: 'epistemology'
  },
  {
    id: 'evil',
    title: 'The Problem of Evil',
    description: 'Why does evil exist? How should we respond to suffering and injustice?',
    category: 'ethics'
  },
  {
    id: 'mind',
    title: 'Philosophy of Mind',
    description: 'What is the mind? How do mental states relate to brain states?',
    category: 'metaphysics'
  },
  {
    id: 'wisdom',
    title: 'Wisdom and Understanding',
    description: 'What is wisdom? How is it different from knowledge?',
    category: 'epistemology'
  },
  {
    id: 'enlightenment',
    title: 'Enlightenment and Awakening',
    description: 'What is spiritual enlightenment? Is there a higher state of consciousness?',
    category: 'spirituality'
  },
  {
    id: 'change',
    title: 'Change and Permanence',
    description: 'What is the nature of change? Is anything truly permanent in the universe?',
    category: 'metaphysics'
  },
  {
    id: 'emotion',
    title: 'Emotions and Reason',
    description: 'What role should emotions play in decision-making? How do they relate to rational thought?',
    category: 'ethics'
  },
  {
    id: 'society',
    title: 'Individual and Society',
    description: 'What is our obligation to society? How do we balance individual needs with collective good?',
    category: 'political'
  },
  {
    id: 'authenticity',
    title: 'Authenticity and Self',
    description: 'What does it mean to be authentic? How do we live true to ourselves?',
    category: 'ethics'
  },
  {
    id: 'power',
    title: 'Power and Authority',
    description: 'What legitimizes power? How should authority be exercised in human relationships?',
    category: 'political'
  },
  {
    id: 'creativity',
    title: 'Creativity and Innovation',
    description: 'What is creativity? How do new ideas and artistic expressions emerge?',
    category: 'aesthetics'
  },
  {
    id: 'nature',
    title: 'Humanity and Nature',
    description: 'What is our relationship with the natural world? Are we separate from or part of nature?',
    category: 'metaphysics'
  },
  {
    id: 'forgiveness',
    title: 'Forgiveness and Justice',
    description: 'When should we forgive? How does forgiveness relate to justice and moral responsibility?',
    category: 'ethics'
  }
];

// Selection of major philosophers from the requested 100, including Arthur Schopenhauer
export const philosophers: Philosopher[] = [
  {
    id: 'plato',
    name: 'Plato',
    lifespan: '428-348 BCE',
    school: 'Ancient Greek Philosophy',
    nationality: 'Greek',
    biography: 'Student of Socrates and teacher of Aristotle, Plato founded the Academy in Athens. His theory of Forms and political philosophy profoundly influenced Western thought.',
    keyWorks: ['The Republic', 'Phaedo', 'Symposium', 'Apology'],
    topics: {
      'reality': {
        stance: 'Theory of Forms',
        summary: 'True reality consists of eternal, perfect Forms or Ideas. The physical world is merely a shadow of this higher reality.',
        keyQuote: 'The unexamined life is not worth living.',
        context: 'Plato\'s Allegory of the Cave illustrates how most people mistake appearances for reality.'
      },
      'knowledge-truth': {
        stance: 'Rationalism',
        summary: 'True knowledge is recollection of eternal truths the soul knew before birth. Reason can lead us to understand the Forms.',
        context: 'Plato believed the soul was immortal and had direct access to truth through philosophical contemplation.'
      },
      'justice': {
        stance: 'Philosopher Kings',
        summary: 'A just society mirrors a just soul, with reason ruling over emotion and desire. The ideal state should be governed by philosopher-kings.',
        context: 'The Republic outlines Plato\'s vision of an ideal state based on wisdom, courage, temperance, and justice.'
      }
    }
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    lifespan: '384-322 BCE',
    school: 'Ancient Greek Philosophy',
    nationality: 'Greek',
    biography: 'Student of Plato and tutor to Alexander the Great, Aristotle founded the Lyceum and made foundational contributions to logic, biology, ethics, and political theory.',
    keyWorks: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics'],
    topics: {
      'ethics-foundation': {
        stance: 'Virtue Ethics',
        summary: 'Ethics is about developing good character traits (virtues) and living in accordance with human nature. The highest good is eudaimonia - flourishing.',
        keyQuote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        context: 'Aristotle rejected both purely rule-based ethics and mere pleasure-seeking, focusing instead on character development.'
      },
      'happiness': {
        stance: 'Eudaimonia',
        summary: 'True happiness is not a feeling but a way of living - the actualization of human potential through virtuous activity.',
        keyQuote: 'Happiness depends upon ourselves.',
        context: 'Aristotelian happiness is objective and involves the full development of human capacities over a complete life.'
      }
    }
  },
  {
    id: 'socrates',
    name: 'Socrates',
    lifespan: '470-399 BCE',
    school: 'Classical Greek Philosophy',
    nationality: 'Greek',
    biography: 'The founder of Western philosophical tradition, known for his method of questioning and his claim that "the unexamined life is not worth living."',
    keyWorks: ['None written (known through Plato\'s dialogues)'],
    topics: {
      'wisdom': {
        stance: 'Knowing Nothing',
        summary: 'True wisdom begins with recognizing the extent of one\'s ignorance. "I know that I know nothing."',
        keyQuote: 'I know that I know nothing.',
        context: 'Socratic ignorance was a starting point for philosophical inquiry rather than skepticism.'
      },
      'virtue': {
        stance: 'Virtue as Knowledge',
        summary: 'Virtue is knowledge, and no one does wrong willingly. If people truly understood good and evil, they would always choose good.',
        context: 'This intellectualist approach to ethics influenced much of subsequent Western moral philosophy.'
      }
    }
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    lifespan: '1724-1804',
    school: 'German Idealism',
    nationality: 'German',
    biography: 'The central figure of modern philosophy, Kant revolutionized ethics, metaphysics, and epistemology with his critical philosophy.',
    keyWorks: ['Critique of Pure Reason', 'Critique of Practical Reason', 'Groundwork for the Metaphysics of Morals'],
    topics: {
      'ethics-foundation': {
        stance: 'Deontological Ethics',
        summary: 'Moral worth comes from acting according to duty and universal moral laws, not consequences. The Categorical Imperative provides the supreme principle.',
        keyQuote: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.',
        context: 'Kant sought to establish morality on rational grounds, independent of religion or cultural differences.'
      },
      'knowledge-truth': {
        stance: 'Transcendental Idealism',
        summary: 'We can only know phenomena (things as they appear to us), not noumena (things in themselves). Knowledge requires both experience and rational categories.',
        context: 'Kant aimed to show how synthetic a priori knowledge is possible, bridging rationalism and empiricism.'
      }
    }
  },
  {
    id: 'confucius',
    name: 'Confucius (Kong Qiu)',
    lifespan: '551-479 BCE',
    school: 'Confucianism',
    nationality: 'Chinese',
    biography: 'The most influential philosopher in Chinese history, Confucius emphasized moral cultivation, social harmony, and the importance of education and ritual.',
    keyWorks: ['The Analects', 'The Great Learning', 'The Doctrine of the Mean'],
    topics: {
      'virtue': {
        stance: 'Ren (Benevolence)',
        summary: 'The highest virtue is ren - benevolence or humaneness. This is cultivated through li (ritual propriety) and self-improvement.',
        keyQuote: 'Do not impose on others what you do not wish for yourself.',
        context: 'Confucian ethics focuses on becoming a junzi (exemplary person) through moral cultivation.'
      },
      'wisdom': {
        stance: 'Learning and Reflection',
        summary: 'Wisdom comes from continuous learning, self-reflection, and the study of both books and human nature.',
        keyQuote: 'Real knowledge is to know the extent of one\'s ignorance.',
        context: 'Confucius emphasized that true learning involves both acquiring knowledge and cultivating moral character.'
      }
    }
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    lifespan: '1844-1900',
    school: 'Continental Philosophy',
    nationality: 'German',
    biography: 'A radical critic of traditional morality and religion, Nietzsche proclaimed the "death of God" and called for the creation of new values.',
    keyWorks: ['Beyond Good and Evil', 'Thus Spoke Zarathustra', 'The Genealogy of Morals'],
    topics: {
      'ethics-foundation': {
        stance: 'Moral Nihilism/Perspectivism',
        summary: 'Traditional moral values are human creations that have outlived their usefulness. We must create new values based on life-affirmation.',
        keyQuote: 'God is dead. God remains dead. And we have killed him.',
        context: 'Nietzsche saw Christian morality as a "slave morality" that suppresses human potential.'
      },
      'meaning-purpose': {
        stance: 'Self-Creation',
        summary: 'Life has no inherent meaning; we must create our own purpose. The Übermensch represents humanity\'s potential to transcend limitations.',
        keyQuote: 'Become who you are.',
        context: 'Nietzsche rejected both religious and secular attempts to find objective meaning in existence.'
      }
    }
  },
  {
    id: 'descartes',
    name: 'René Descartes',
    lifespan: '1596-1650',
    school: 'Modern Philosophy',
    nationality: 'French',
    biography: 'The father of modern philosophy, Descartes established the method of systematic doubt and mind-body dualism. His work laid foundations for both rationalism and modern science.',
    keyWorks: ['Discourse on Method', 'Meditations on First Philosophy', 'Principles of Philosophy'],
    topics: {
      'knowledge-truth': {
        stance: 'Methodical Doubt',
        summary: 'Certain knowledge begins with systematic doubt of everything that can be doubted, leading to the indubitable "I think, therefore I am."',
        keyQuote: 'Cogito ergo sum - I think, therefore I am.',
        context: 'Descartes sought to rebuild knowledge on absolutely certain foundations using mathematical reasoning.'
      },
      'mind-body': {
        stance: 'Substance Dualism',
        summary: 'Mind and body are distinct substances - mind is non-extended thinking substance, body is extended non-thinking substance.',
        context: 'This created the interaction problem: how can immaterial mind influence material body?'
      }
    }
  },
  {
    id: 'lao-tzu',
    name: 'Lao Tzu',
    lifespan: '6th century BCE',
    school: 'Taoism',
    nationality: 'Chinese',
    biography: 'The legendary founder of Taoism and attributed author of the Tao Te Ching. Lao Tzu taught the philosophy of wu wei (non-action) and harmony with the natural order.',
    keyWorks: ['Tao Te Ching'],
    topics: {
      'reality': {
        stance: 'The Tao',
        summary: 'Reality is governed by the Tao, an ineffable principle that underlies all existence. The wise align themselves with this natural order.',
        keyQuote: 'The Tao that can be named is not the eternal Tao.',
        context: 'Taoism emphasizes the mystery and unity underlying apparent diversity in the world.'
      },
      'wisdom': {
        stance: 'Wu Wei (Non-Action)',
        summary: 'True wisdom lies in knowing when not to act, allowing things to unfold naturally rather than forcing outcomes.',
        keyQuote: 'The sage does not attempt anything very big, and thus achieves greatness.',
        context: 'Wu wei represents effortless action that is in harmony with natural flow.'
      }
    }
  },
  {
    id: 'buddha',
    name: 'Buddha (Siddhartha Gautama)',
    lifespan: '563-483 BCE',
    school: 'Buddhism',
    nationality: 'Indian',
    biography: 'The founder of Buddhism, Siddhartha Gautama was a spiritual teacher who attained enlightenment and taught the Four Noble Truths and the Eightfold Path as a way to end suffering.',
    keyWorks: ['The Dhammapada', 'The Lotus Sutra', 'The Heart Sutra'],
    topics: {
      'suffering': {
        stance: 'Four Noble Truths',
        summary: 'Suffering (dukkha) is an inherent part of existence. It arises from attachment and craving, but can be overcome through the Eightfold Path.',
        keyQuote: 'Pain is inevitable, suffering is optional.',
        context: 'The First Noble Truth establishes that suffering is universal; the solution lies in understanding its causes.'
      },
      'consciousness': {
        stance: 'Mindfulness and Awareness',
        summary: 'Consciousness is impermanent and without a fixed self. Through mindful awareness, one can see the true nature of mind and reality.',
        context: 'Buddhist meditation practices aim to directly observe the nature of consciousness and its contents.'
      },
      'enlightenment': {
        stance: 'Nirvana',
        summary: 'Enlightenment is the cessation of suffering through the elimination of ignorance and attachment. It is the highest goal of human existence.',
        keyQuote: 'Peace comes from within. Do not seek it without.',
        context: 'Buddha\'s own awakening under the Bodhi tree became the model for spiritual liberation.'
      }
    }
  },
  {
    id: 'rumi',
    name: 'Rumi (Jalal ad-Din)',
    lifespan: '1207-1273',
    school: 'Sufism',
    nationality: 'Persian',
    biography: 'The greatest mystical poet in Islamic tradition, Rumi founded the Mevlevi order of dervishes. His poetry expresses the soul\'s longing for divine union through love.',
    keyWorks: ['The Masnavi', 'Diwan-e Shams-e Tabrizi', 'Fihi ma Fihi'],
    topics: {
      'love': {
        stance: 'Divine Love',
        summary: 'Love is the fundamental force of the universe and the path to divine union. Human love reflects the soul\'s deeper longing for the Divine.',
        keyQuote: 'Love is the whole thing. We are only pieces.',
        context: 'Sufi mysticism sees love as both the journey and the destination of spiritual seeking.'
      },
      'god': {
        stance: 'Mystical Union',
        summary: 'God is not separate from creation but is the inner reality of all existence. The goal is to realize this unity through spiritual practice.',
        keyQuote: 'You are not just the drop in the ocean, but the entire ocean in each drop.',
        context: 'Rumi taught that the apparent separation between self and God is an illusion to be transcended.'
      }
    }
  },
  {
    id: 'tagore',
    name: 'Rabindranath Tagore',
    lifespan: '1861-1941',
    school: 'Neo-Vedantic Humanism',
    nationality: 'Indian',
    biography: 'Nobel Prize-winning poet, philosopher, and polymath who bridged Eastern and Western thought. Tagore championed universal humanism and educational reform.',
    keyWorks: ['Gitanjali', 'The Religion of Man', 'Nationalism', 'Creative Unity'],
    topics: {
      'beauty': {
        stance: 'Universal Aesthetic',
        summary: 'Beauty is the divine expressing itself through creation. Art and poetry are pathways to understanding the deeper unity of existence.',
        keyQuote: 'The butterfly counts not months but moments, and has time enough.',
        context: 'Tagore saw beauty as a spiritual force that connects humanity to the universal consciousness.'
      },
      'freedom': {
        stance: 'Spiritual Freedom',
        summary: 'True freedom comes from inner liberation and the realization of universal brotherhood, not merely political independence.',
        keyQuote: 'Where the mind is without fear and the head is held high... into that heaven of freedom, my Father, let my country awake.',
        context: 'Tagore advocated for both personal and collective freedom rooted in spiritual understanding.'
      }
    }
  },
  {
    id: 'arthur-schopenhauer',
    name: 'Arthur Schopenhauer',
    lifespan: '1788-1860',
    school: 'German Philosophy',
    nationality: 'German',
    biography: 'Influenced by Kant and Eastern philosophy, Schopenhauer developed a pessimistic philosophy centered on the will as the fundamental reality behind appearances.',
    keyWorks: ['The World as Will and Representation', 'On the Basis of Morality', 'Essays and Aphorisms'],
    topics: {
      'suffering': {
        stance: 'Pessimistic Philosophy',
        summary: 'Life is suffering because it is driven by blind will. Desire leads to suffering, and satisfaction is only temporary relief.',
        keyQuote: 'All satisfaction, or what is commonly called happiness, is really and essentially always negative only, and never positive.',
        context: 'Schopenhauer was one of the first Western philosophers to seriously engage with Buddhist ideas about suffering.'
      },
      'reality': {
        stance: 'Will as Thing-in-Itself',
        summary: 'Behind the world of appearances lies the will - a blind, irrational force that drives all existence.',
        context: 'Schopenhauer claimed to have solved Kant\'s problem by identifying the thing-in-itself with the will.'
      }
    }
  },
  {
    id: 'hume',
    name: 'David Hume',
    lifespan: '1711-1776',
    school: 'British Empiricism',
    nationality: 'Scottish',
    biography: 'A leading figure of the Scottish Enlightenment and British empiricism, Hume was skeptical of reason\'s power and emphasized the role of custom and habit in human understanding.',
    keyWorks: ['A Treatise of Human Nature', 'An Enquiry Concerning Human Understanding', 'Dialogues Concerning Natural Religion'],
    topics: {
      'knowledge-truth': {
        stance: 'Empirical Skepticism',
        summary: 'All knowledge comes from experience, but we cannot prove causal connections or the uniformity of nature through reason alone.',
        keyQuote: 'Reason is, and ought only to be the slave of the passions.',
        context: 'Hume\'s skepticism about induction and causation influenced Kant and later empiricism.'
      }
    }
  },
  {
    id: 'locke',
    name: 'John Locke',
    lifespan: '1632-1704',
    school: 'British Empiricism',
    nationality: 'English',
    biography: 'A founder of British empiricism and liberal political theory, Locke argued that the mind begins as a blank slate and that government requires consent of the governed.',
    keyWorks: ['An Essay Concerning Human Understanding', 'Two Treatises of Government', 'A Letter Concerning Toleration'],
    topics: {
      'knowledge-truth': {
        stance: 'Tabula Rasa',
        summary: 'The mind at birth is a blank slate. All knowledge comes from sensory experience and reflection on that experience.',
        keyQuote: 'No man\'s knowledge here can go beyond his experience.',
        context: 'Locke rejected innate ideas and argued that even complex concepts are built up from simple sensations.'
      },
      'freedom': {
        stance: 'Liberal Democracy',
        summary: 'Government exists to protect natural rights to life, liberty, and property. Political authority comes from consent of the governed.',
        context: 'Locke\'s political theory influenced the American Revolution and modern democratic thought.'
      }
    }
  },
  {
    id: 'spinoza',
    name: 'Baruch Spinoza',
    lifespan: '1632-1677',
    school: 'Rationalism',
    nationality: 'Dutch',
    biography: 'A Jewish-Dutch rationalist philosopher who identified God with Nature and developed a geometric method for understanding ethics and human emotions.',
    keyWorks: ['Ethics', 'Theological-Political Treatise', 'Political Treatise'],
    topics: {
      'god': {
        stance: 'Pantheism',
        summary: 'God and Nature are one substance (Deus sive Natura). Everything that exists is a mode or expression of this single divine substance.',
        keyQuote: 'God or Nature.',
        context: 'Spinoza\'s pantheism was considered heretical by both Jewish and Christian authorities of his time.'
      },
      'free-will': {
        stance: 'Determinism',
        summary: 'Everything follows necessarily from the nature of God/Nature. Freedom comes from understanding necessity, not from the ability to do otherwise.',
        context: 'Spinoza argued that the feeling of free will is an illusion arising from our ignorance of the causes of our actions.'
      }
    }
  },
  {
    id: 'hegel',
    name: 'Georg Wilhelm Friedrich Hegel',
    lifespan: '1770-1831',
    school: 'German Idealism',
    nationality: 'German',
    biography: 'Developed a comprehensive philosophical system based on dialectical reasoning and the progressive development of Absolute Spirit.',
    keyWorks: ['Phenomenology of Spirit', 'Logic', 'Philosophy of Right'],
    topics: {
      'reality': {
        stance: 'Absolute Idealism',
        summary: 'Reality is the progressive self-realization of Absolute Spirit through dialectical development in history.',
        keyQuote: 'The real is rational and the rational is real.',
        context: 'Hegel saw history as the gradual unfolding of freedom and self-consciousness.'
      },
      'change': {
        stance: 'Dialectical Process',
        summary: 'All development occurs through dialectical contradiction: thesis, antithesis, and synthesis.',
        context: 'Hegelian dialectics influenced both Marxism and existentialism.'
      }
    }
  },
  {
    id: 'marx',
    name: 'Karl Marx',
    lifespan: '1818-1883',
    school: 'German Philosophy/Political Economy',
    nationality: 'German',
    biography: 'Revolutionary thinker who analyzed capitalism and predicted its eventual replacement by communism through class struggle.',
    keyWorks: ['Das Kapital', 'The Communist Manifesto', 'The German Ideology'],
    topics: {
      'society': {
        stance: 'Historical Materialism',
        summary: 'Society develops through class struggle driven by economic forces. The ruling class controls the means of production.',
        keyQuote: 'The philosophers have only interpreted the world; the point is to change it.',
        context: 'Marx combined Hegelian dialectics with materialist analysis of economic structures.'
      },
      'freedom': {
        stance: 'Liberation through Revolution',
        summary: 'True freedom requires eliminating economic exploitation and class oppression through revolutionary transformation.',
        context: 'Marx saw capitalism as a necessary stage toward eventual communist freedom.'
      }
    }
  },
  {
    id: 'kierkegaard',
    name: 'Søren Kierkegaard',
    lifespan: '1813-1855',
    school: 'Existentialism',
    nationality: 'Danish',
    biography: 'Often called the father of existentialism, Kierkegaard emphasized the importance of individual existence, passion, and the leap of faith.',
    keyWorks: ['Fear and Trembling', 'Either/Or', 'The Sickness Unto Death'],
    topics: {
      'meaning-purpose': {
        stance: 'Leap of Faith',
        summary: 'Authentic existence requires passionate commitment beyond rational justification. We must choose ourselves through decisive action.',
        context: 'Kierkegaard criticized both systematic philosophy and conventional Christianity for avoiding the personal challenge of existence.'
      },
      'free-will': {
        stance: 'Radical Choice',
        summary: 'Freedom involves making choices that define who we are. Anxiety arises from our confrontation with unlimited possibilities.',
        context: 'Kierkegaard analyzed anxiety as the dizziness of freedom when facing the abyss of possibility.'
      }
    }
  },
  {
    id: 'voltaire',
    name: 'Voltaire (François-Marie Arouet)',
    lifespan: '1694-1778',
    school: 'Enlightenment',
    nationality: 'French',
    biography: 'Champion of civil liberties, freedom of speech, and separation of church and state during the French Enlightenment.',
    keyWorks: ['Candide', 'Letters on England', 'Treatise on Tolerance'],
    topics: {
      'freedom': {
        stance: 'Civil Liberties',
        summary: 'Freedom of speech, religion, and thought are essential human rights that must be protected from tyranny.',
        keyQuote: 'I disapprove of what you say, but I will defend to the death your right to say it.',
        context: 'Voltaire\'s advocacy influenced the development of modern concepts of human rights and religious tolerance.'
      }
    }
  },
  {
    id: 'rousseau',
    name: 'Jean-Jacques Rousseau',
    lifespan: '1712-1778',
    school: 'Enlightenment',
    nationality: 'Genevan',
    biography: 'Influential political philosopher who argued that humans are naturally good but corrupted by civilization.',
    keyWorks: ['The Social Contract', 'Emile', 'Discourse on Inequality'],
    topics: {
      'society': {
        stance: 'Social Contract',
        summary: 'Legitimate government arises from a social contract where people surrender natural freedom for civil liberty under the general will.',
        keyQuote: 'Man is born free, and everywhere he is in chains.',
        context: 'Rousseau\'s concept of the general will influenced democratic theory and the French Revolution.'
      }
    }
  },
  {
    id: 'hobbes',
    name: 'Thomas Hobbes',
    lifespan: '1588-1679',
    school: 'Political Philosophy',
    nationality: 'English',
    biography: 'Developed social contract theory based on the premise that life in the state of nature would be "solitary, poor, nasty, brutish, and short."',
    keyWorks: ['Leviathan', 'De Cive', 'Elements of Law'],
    topics: {
      'society': {
        stance: 'Social Contract',
        summary: 'Rational individuals agree to surrender natural rights to a sovereign power to escape the war of all against all.',
        keyQuote: 'The life of man, solitary, poor, nasty, brutish, and short.',
        context: 'Hobbes argued for absolute sovereignty as the only way to ensure peace and security.'
      }
    }
  }
];