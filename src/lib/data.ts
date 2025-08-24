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

export const philosophers: Philosopher[] = [
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
      },
      'virtue': {
        stance: 'Natural Virtue',
        summary: 'Virtue arises naturally when one lives in accordance with the Tao, without artificial moral rules or social conventions.',
        context: 'Taoist virtue is spontaneous and simple, like water flowing downhill.'
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
      },
      'enlightenment': {
        stance: 'Fana (Annihilation)',
        summary: 'Spiritual enlightenment involves the ego\'s dissolution in divine love, leading to a state of unity with the beloved.',
        keyQuote: 'Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.',
        context: 'The path of fana involves surrendering the limited self to experience unlimited divine presence.'
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
      },
      'education': {
        stance: 'Holistic Development',
        summary: 'Education should develop the whole person - mind, body, and spirit - in harmony with nature and universal values.',
        context: 'Tagore founded Visva-Bharati University based on these principles of integrated learning.'
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
      },
      'justice': {
        stance: 'Distributive Justice',
        summary: 'Justice involves giving each person their due according to merit, need, or equality, depending on the context.',
        context: 'Aristotle distinguished between different forms of equality and fairness in his political philosophy.'
      }
    }
  },
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
      },
      'god': {
        stance: 'Religious Skepticism',
        summary: 'Arguments for God\'s existence are logically flawed. The problem of evil makes divine benevolence doubtful.',
        context: 'Hume critiqued the design argument and argued that religious belief stems from human psychology rather than reason.'
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
    id: 'aquinas',
    name: 'Thomas Aquinas',
    lifespan: '1225-1274',
    school: 'Scholasticism',
    nationality: 'Italian',
    biography: 'The greatest medieval philosopher, Aquinas synthesized Aristotelian philosophy with Christian theology, creating a comprehensive system of thought.',
    keyWorks: ['Summa Theologiae', 'Summa Contra Gentiles', 'On Being and Essence'],
    topics: {
      'god': {
        stance: 'Natural Theology',
        summary: 'God\'s existence can be proven through reason using the Five Ways. God is pure being, the unmoved mover, and the source of all perfection.',
        keyQuote: 'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.',
        context: 'Aquinas argued that reason and faith are compatible and mutually supporting.'
      },
      'ethics-foundation': {
        stance: 'Natural Law',
        summary: 'Moral principles are based on human nature and can be discovered through reason. The natural law participates in eternal law.',
        context: 'Thomistic natural law theory influenced Catholic moral teaching and natural rights theory.'
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
    id: 'sartre',
    name: 'Jean-Paul Sartre',
    lifespan: '1905-1980',
    school: 'Existentialism',
    nationality: 'French',
    biography: 'The leading figure of existentialism, Sartre argued that "existence precedes essence" - we exist first and create our nature through choices.',
    keyWorks: ['Being and Nothingness', 'Existentialism is a Humanism', 'No Exit'],
    topics: {
      'free-will': {
        stance: 'Radical Freedom',
        summary: 'Humans are "condemned to be free" - we have complete responsibility for our choices and cannot escape the burden of freedom.',
        keyQuote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
        context: 'Sartre rejected all attempts to limit human freedom through appeals to God, nature, or social determinism.'
      },
      'meaning-purpose': {
        stance: 'Existentialism',
        summary: 'Life begins without predetermined essence or purpose. We must create our own meaning through authentic choices.',
        keyQuote: 'Existence precedes essence.',
        context: 'Sartre emphasized the anxiety and responsibility that comes with recognizing our absolute freedom.'
      }
    }
  },
  {
    id: 'wittgenstein',
    name: 'Ludwig Wittgenstein',
    lifespan: '1889-1951',
    school: 'Analytic Philosophy',
    nationality: 'Austrian',
    biography: 'One of the most influential philosophers of the 20th century, Wittgenstein revolutionized the understanding of language, logic, and the nature of philosophy itself.',
    keyWorks: ['Tractus Logico-Philosophicus', 'Philosophical Investigations', 'On Certainty'],
    topics: {
      'language': {
        stance: 'Language Games',
        summary: 'Language gets its meaning from use in particular contexts or "games." Many philosophical problems arise from misunderstanding how language works.',
        keyQuote: 'The limits of my language mean the limits of my world.',
        context: 'Later Wittgenstein rejected his earlier picture theory in favor of understanding language as a form of life.'
      },
      'knowledge-truth': {
        stance: 'Anti-foundationalism',
        summary: 'Our most basic beliefs are not justified by reasons but are part of the "grammar" of our language games and forms of life.',
        context: 'Wittgenstein challenged traditional epistemology by showing how certainty functions in everyday practices.'
      }
    }
  },
  {
    id: 'mill',
    name: 'John Stuart Mill',
    lifespan: '1806-1873',
    school: 'Utilitarianism',
    nationality: 'British',
    biography: 'A leading figure in classical liberalism and utilitarianism, Mill championed individual liberty, women\'s rights, and the greatest happiness principle.',
    keyWorks: ['On Liberty', 'Utilitarianism', 'The Subjection of Women'],
    topics: {
      'ethics-foundation': {
        stance: 'Utilitarianism',
        summary: 'Actions are right insofar as they promote happiness and wrong as they produce the opposite. The goal is the greatest happiness for the greatest number.',
        keyQuote: 'Actions are right in proportion as they tend to promote happiness.',
        context: 'Mill refined Bentham\'s hedonistic calculus and argued for qualitative differences in pleasures.'
      },
      'freedom': {
        stance: 'Harm Principle',
        summary: 'Society should not interfere with individual liberty except to prevent harm to others. Personal freedom is essential for human development.',
        keyQuote: 'The only purpose for which power can be rightfully exercised over any member of a civilized community is to prevent harm to others.',
        context: 'Mill\'s harm principle attempts to balance individual freedom with social welfare.'
      }
    }
  },
  {
    id: 'camus',
    name: 'Albert Camus',
    lifespan: '1913-1960',
    school: 'Absurdism',
    nationality: 'French',
    biography: 'Nobel Prize-winning author and philosopher who explored the absurd condition of human existence and the rebellion against meaninglessness.',
    keyWorks: ['The Myth of Sisyphus', 'The Stranger', 'The Rebel'],
    topics: {
      'meaning-purpose': {
        stance: 'Absurdism',
        summary: 'Life is fundamentally absurd - there is no inherent meaning. But we must imagine Sisyphus happy and create our own values through revolt.',
        keyQuote: 'The struggle itself toward the heights is enough to fill a man\'s heart.',
        context: 'Camus rejected both suicide and philosophical escape, advocating for full engagement with absurd existence.'
      },
      'death': {
        stance: 'Confronting Mortality',
        summary: 'The only serious philosophical problem is suicide. We must confront death and meaninglessness without illusions but also without despair.',
        context: 'Camus argued that accepting absurdity leads to a more authentic and passionate life.'
      }
    }
  },
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius',
    lifespan: '121-180 CE',
    school: 'Stoicism',
    nationality: 'Roman',
    biography: 'Roman Emperor and Stoic philosopher, Marcus Aurelius wrote personal reflections on duty, mortality, and virtue that became one of the greatest works of ancient philosophy.',
    keyWorks: ['Meditations', 'Letters to Fronto'],
    topics: {
      'virtue': {
        stance: 'Stoic Ethics',
        summary: 'Virtue is the only true good. We should focus on what is within our control and accept what is not with equanimity.',
        keyQuote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
        context: 'Stoicism emphasizes inner freedom and virtue as the path to happiness regardless of external circumstances.'
      },
      'death': {
        stance: 'Memento Mori',
        summary: 'Meditation on death helps us appreciate life and maintain perspective on what truly matters.',
        keyQuote: 'It is not death that a man should fear, but he should fear never beginning to live.',
        context: 'Stoics viewed death as natural and used its inevitability to focus on living virtuously.'
      }
    }
  },
  {
    id: 'epictetus',
    name: 'Epictetus',
    lifespan: '50-135 CE',
    school: 'Stoicism',
    nationality: 'Greek',
    biography: 'Born a slave, Epictetus became one of the greatest Stoic teachers. His philosophy focused on distinguishing between what is and isn\'t under our control.',
    keyWorks: ['Discourses', 'Enchiridion'],
    topics: {
      'free-will': {
        stance: 'Inner Freedom',
        summary: 'True freedom comes from understanding what is and isn\'t under our control. We cannot control external events, only our responses to them.',
        keyQuote: 'No one can hurt you without your permission.',
        context: 'Despite being physically enslaved, Epictetus taught that inner freedom is always available through right thinking.'
      },
      'virtue': {
        stance: 'Discipline of Desire',
        summary: 'Virtue requires training our desires to align with nature and reason rather than external circumstances.',
        context: 'Epictetus developed practical exercises for cultivating Stoic attitudes and responses.'
      }
    }
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi (Chuang Tzu)',
    lifespan: '369-286 BCE',
    school: 'Taoism',
    nationality: 'Chinese',
    biography: 'The second great Taoist philosopher after Lao Tzu, Zhuangzi used paradoxes, humor, and vivid imagery to convey the relativity of human knowledge and the importance of spontaneous action.',
    keyWorks: ['Zhuangzi', 'The Butterfly Dream'],
    topics: {
      'reality': {
        stance: 'Relativism',
        summary: 'Reality is relative to perspective. What seems real and important from one viewpoint may be illusory from another.',
        keyQuote: 'Once upon a time, I dreamt I was a butterfly... Suddenly I awoke... Now I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.',
        context: 'Zhuangzi used the famous butterfly dream to illustrate the uncertainty of distinguishing reality from illusion.'
      },
      'wisdom': {
        stance: 'Useless Knowledge',
        summary: 'True wisdom often appears useless by conventional standards. The sage cultivates wu wei - effortless action in harmony with nature.',
        context: 'Zhuangzi celebrated the value of what society considers useless or insignificant.'
      }
    }
  },
  {
    id: 'avicenna',
    name: 'Avicenna (Ibn Sina)',
    lifespan: '980-1037',
    school: 'Islamic Philosophy',
    nationality: 'Persian',
    biography: 'One of the most significant philosophers and physicians of the Islamic Golden Age, Avicenna synthesized Aristotelian philosophy with Islamic theology.',
    keyWorks: ['The Book of Healing', 'The Canon of Medicine', 'The Book of Salvation'],
    topics: {
      'consciousness': {
        stance: 'Flying Man Argument',
        summary: 'Self-awareness is immediate and doesn\'t depend on sensory experience. The soul\'s existence can be known independently of the body.',
        keyQuote: 'The soul is in the body like a sailor in a ship.',
        context: 'Avicenna\'s thought experiment imagined a person suspended in air without sensation, arguing they would still be aware of their existence.'
      },
      'god': {
        stance: 'Necessary Existent',
        summary: 'God is the Necessary Existent whose essence is identical with existence, while all other beings are contingent.',
        context: 'Avicenna influenced both Islamic theology and later Christian scholastic philosophy through his proof of God\'s existence.'
      }
    }
  },
  {
    id: 'maimonides',
    name: 'Maimonides (Moses ben Maimon)',
    lifespan: '1138-1204',
    school: 'Jewish Philosophy',
    nationality: 'Spanish-Jewish',
    biography: 'The greatest Jewish philosopher of the medieval period, Maimonides harmonized Aristotelian philosophy with Jewish theology and law.',
    keyWorks: ['Guide for the Perplexed', 'Mishneh Torah', 'Commentary on the Mishnah'],
    topics: {
      'god': {
        stance: 'Negative Theology',
        summary: 'God\'s essence is unknowable. We can only say what God is not, never what God is positively. Divine attributes describe our understanding, not God\'s nature.',
        keyQuote: 'The more we know of God, the more we realize how little we know.',
        context: 'Maimonides sought to preserve divine transcendence while making room for rational discussion of God.'
      },
      'knowledge-truth': {
        stance: 'Reason and Revelation',
        summary: 'Reason and religious revelation are compatible when properly understood. Philosophy can help clarify religious truths.',
        context: 'Maimonides influenced Jewish, Christian, and Islamic thought on the relationship between faith and reason.'
      }
    }
  },
  {
    id: 'mencius',
    name: 'Mencius (Mengzi)',
    lifespan: '372-289 BCE',
    school: 'Confucianism',
    nationality: 'Chinese',
    biography: 'The most important early Confucian philosopher after Confucius, Mencius developed the doctrine of innate human goodness and the right of rebellion against unjust rulers.',
    keyWorks: ['The Mencius', 'Book of Mencius'],
    topics: {
      'virtue': {
        stance: 'Innate Goodness',
        summary: 'Human nature is fundamentally good. Everyone possesses innate moral feelings that can be cultivated through education and practice.',
        keyQuote: 'The path is near, but people seek it far away.',
        context: 'Mencius argued against those who claimed human nature was selfish or neutral, insisting on humanity\'s natural moral potential.'
      },
      'justice': {
        stance: 'Benevolent Government',
        summary: 'Legitimate government must serve the people\'s welfare. Rulers who fail in this duty lose the Mandate of Heaven and may be overthrown.',
        context: 'Mencius developed early ideas about popular sovereignty and justified resistance to tyranny.'
      }
    }
  },
  {
    id: 'augustine',
    name: 'Augustine of Hippo',
    lifespan: '354-430',
    school: 'Christian Philosophy',
    nationality: 'Roman-African',
    biography: 'The most influential Christian philosopher of the ancient period, Augustine synthesized Christian theology with Platonic philosophy and developed theories of time, memory, and divine grace.',
    keyWorks: ['Confessions', 'The City of God', 'On the Trinity'],
    topics: {
      'time': {
        stance: 'Psychological Time',
        summary: 'Time exists in the mind as memory (past), attention (present), and expectation (future). God exists outside time in eternity.',
        keyQuote: 'What then is time? If no one asks me, I know; if I want to explain it to someone who asks, I do not know.',
        context: 'Augustine\'s analysis of time influenced both philosophy and theology for over a millennium.'
      },
      'evil': {
        stance: 'Privation Theory',
        summary: 'Evil is not a positive substance but a privation or absence of good. All of God\'s creation is fundamentally good.',
        context: 'Augustine developed this theory to solve the problem of how a good God could create a world containing evil.'
      }
    }
  },
  {
    id: 'berkeley',
    name: 'George Berkeley',
    lifespan: '1685-1753',
    school: 'British Empiricism',
    nationality: 'Irish',
    biography: 'An Anglican bishop and empiricist philosopher, Berkeley argued that material objects exist only as ideas perceived by minds, leading to his idealism.',
    keyWorks: ['A Treatise Concerning the Principles of Human Knowledge', 'Three Dialogues Between Hylas and Philonous'],
    topics: {
      'reality': {
        stance: 'Subjective Idealism',
        summary: 'To be is to be perceived (esse est percipi). Material objects are collections of ideas in minds, ultimately in God\'s mind.',
        keyQuote: 'Esse est percipi - to be is to be perceived.',
        context: 'Berkeley argued this position would eliminate skepticism by removing the gap between appearance and reality.'
      },
      'god': {
        stance: 'Divine Perception',
        summary: 'God continuously perceives all ideas, ensuring the stability and regularity of the natural world.',
        context: 'Berkeley\'s idealism was motivated partly by religious concerns about materialism and atheism.'
      }
    }
  },
  {
    id: 'schopenhauer',
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
        keyQuote: 'The most painful state of being is remembering the future, particularly the one you\'ll never have.',
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
    id: 'rawls',
    name: 'John Rawls',
    lifespan: '1921-2002',
    school: 'Political Liberalism',
    nationality: 'American',
    biography: 'Rawls revolutionized political philosophy with "A Theory of Justice," introducing the concept of justice as fairness and the original position thought experiment.',
    keyWorks: ['A Theory of Justice', 'Political Liberalism', 'The Law of Peoples'],
    topics: {
      'justice': {
        stance: 'Justice as Fairness',
        summary: 'Justice is determined by principles that free and equal persons would choose from behind a "veil of ignorance" about their social position.',
        keyQuote: 'Justice is the first virtue of social institutions.',
        context: 'Rawls sought to create a fair procedure for determining the principles of justice in a pluralistic society.'
      },
      'freedom': {
        stance: 'Equal Liberty',
        summary: 'Each person should have equal right to the most extensive basic liberties compatible with similar liberty for others.',
        context: 'Rawls\' first principle of justice prioritizes basic liberties over other social goods.'
      }
    }
  },
  {
    id: 'foucault',
    name: 'Michel Foucault',
    lifespan: '1926-1984',
    school: 'Poststructuralism',
    nationality: 'French',
    biography: 'Influential French philosopher who studied the relationship between power, knowledge, and social institutions, examining how they shape human subjects.',
    keyWorks: ['Discipline and Punish', 'The History of Sexuality', 'The Archaeology of Knowledge'],
    topics: {
      'knowledge-truth': {
        stance: 'Power/Knowledge',
        summary: 'Knowledge and power are intimately connected. What counts as truth is shaped by power relations and social institutions.',
        keyQuote: 'Power is not an institution, and not a structure; neither is it a certain strength we are endowed with; it is the name that one attributes to a complex strategical situation.',
        context: 'Foucault analyzed how disciplines like medicine, psychology, and criminology create subjects through their knowledge practices.'
      },
      'identity': {
        stance: 'Subject Formation',
        summary: 'Personal identity is not natural but is produced through social practices and power relations.',
      }
    }
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    lifespan: '1908-1986',
    school: 'Existentialism',
    nationality: 'French',
    biography: 'French existentialist philosopher, writer, and feminist theorist who wrote extensively about women\'s oppression and the nature of freedom.',
    keyWorks: ['The Second Sex', 'The Ethics of Ambiguity', 'She Came to Stay'],
    topics: {
      'freedom': {
        stance: 'Situated Freedom',
        summary: 'Freedom is always situated within social and historical contexts. Women\'s liberation requires both personal and collective transformation.',
        keyQuote: 'One is not born, but rather becomes, a woman.',
        context: 'De Beauvoir analyzed how social conditioning limits women\'s freedom and authentic self-realization.'
      },
      'authenticity': {
        stance: 'Ethical Authenticity',
        summary: 'Authentic existence requires recognizing and assuming one\'s freedom while acknowledging the freedom of others.',
        context: 'De Beauvoir developed existentialist ethics that emphasizes reciprocal recognition and responsibility.'
      }
    }
  },
  {
    id: 'nagarjuna',
    name: 'Nagarjuna',
    lifespan: '2nd-3rd century CE',
    school: 'Madhyamaka Buddhism',
    nationality: 'Indian',
    biography: 'Founder of the Madhyamaka (Middle Way) school of Buddhist philosophy, Nagarjuna developed the doctrine of emptiness (sunyata).',
    keyWorks: ['Fundamental Verses on the Middle Way', 'Vigrahavyavartani', 'Ratnavali'],
    topics: {
      'reality': {
        stance: 'Emptiness (Sunyata)',
        summary: 'All phenomena are empty of inherent existence and arise through dependent origination. Reality is neither existent nor non-existent.',
        keyQuote: 'Nothing arises without cause. Nothing arises from causes that are totally unrelated.',
        context: 'Nagarjuna\'s Middle Way philosophy avoids both eternalism and nihilism through the concept of emptiness.'
      },
      'truth': {
        stance: 'Two Truths',
        summary: 'There are two levels of truth: conventional truth (worldly understanding) and ultimate truth (emptiness of inherent existence).',
        context: 'This doctrine allows for practical engagement with the world while maintaining ultimate emptiness.'
      }
    }
  },
  {
    id: 'hannah-arendt',
    name: 'Hannah Arendt',
    lifespan: '1906-1975',
    school: 'Political Theory',
    nationality: 'German-American',
    biography: 'Political theorist who analyzed the nature of power, authority, and totalitarianism, emphasizing the importance of public life and political action.',
    keyWorks: ['The Human Condition', 'The Origins of Totalitarianism', 'Eichmann in Jerusalem'],
    topics: {
      'power': {
        stance: 'Power as Action',
        summary: 'True power arises from people acting together in public spaces. Violence is the opposite of power, not its manifestation.',
        keyQuote: 'Power corresponds to the human ability not just to act but to act in concert.',
        context: 'Arendt distinguished between power, authority, strength, force, and violence in political life.'
      },
      'society': {
        stance: 'Vita Activa',
        summary: 'Human life consists of three activities: labor (biological needs), work (creating durable objects), and action (political engagement).',
        context: 'Arendt warned against the decline of public life and the rise of social conformity in modern societies.'
      }
    }
  },
  {
    id: 'william-james',
    name: 'William James',
    lifespan: '1842-1910',
    school: 'Pragmatism',
    nationality: 'American',
    biography: 'Psychologist and philosopher who founded American pragmatism, emphasizing the practical consequences of beliefs and ideas.',
    keyWorks: ['The Will to Believe', 'Pragmatism', 'The Varieties of Religious Experience'],
    topics: {
      'truth': {
        stance: 'Pragmatic Truth',
        summary: 'Truth is what works in practice. Ideas become true through successful application and verification in experience.',
        keyQuote: 'The ultimate test for us of what a truth means is the conduct it dictates or inspires.',
        context: 'James rejected correspondence theories of truth in favor of instrumental and experiential approaches.'
      },
      'god': {
        stance: 'Religious Experience',
        summary: 'Religious beliefs should be judged by their practical effects on human life rather than their doctrinal content.',
        context: 'James studied mystical experiences and argued for the legitimacy of personal religious insight.'
      }
    }
  },
  {
    id: 'mary-wollstonecraft',
    name: 'Mary Wollstonecraft',
    lifespan: '1759-1797',
    school: 'Enlightenment Feminism',
    nationality: 'English',
    biography: 'Pioneering feminist philosopher who argued for women\'s equality in education and society, laying groundwork for modern feminist thought.',
    keyWorks: ['A Vindication of the Rights of Woman', 'A Vindication of the Rights of Men', 'Letters Written in Sweden'],
    topics: {
      'freedom': {
        stance: 'Women\'s Rights',
        summary: 'Women deserve equal rights to education, economic independence, and political participation. Social inequality stems from unjust institutions.',
        keyQuote: 'It is justice, not charity, that is wanting in the world.',
        context: 'Wollstonecraft challenged the notion that women are naturally inferior and argued for social reform.'
      },
      'virtue': {
        stance: 'Rational Virtue',
        summary: 'Both men and women can develop virtue through reason and education. Virtue should not be gendered or class-based.',
        context: 'She criticized contemporary ideals of feminine virtue as artificially constructed and limiting.'
      }
    }
  },
  {
    id: 'plotinus',
    name: 'Plotinus',
    lifespan: '204-270 CE',
    school: 'Neoplatonism',
    nationality: 'Greek-Egyptian',
    biography: 'Founder of Neoplatonism, Plotinus developed a systematic metaphysics centered on the One as the ultimate source of all reality.',
    keyWorks: ['The Enneads'],
    topics: {
      'reality': {
        stance: 'Emanation from the One',
        summary: 'All reality emanates from the One through successive levels: the One, Intellect, and Soul. The goal is return to unity with the One.',
        keyQuote: 'The One is perfect because it seeks nothing, has nothing, and needs nothing.',
        context: 'Plotinus influenced both Christian theology and Islamic philosophy through his metaphysical system.'
      },
      'enlightenment': {
        stance: 'Mystical Union',
        summary: 'The highest form of knowledge is direct, mystical union with the One, transcending rational thought.',
        context: 'Plotinus reported having mystical experiences of unity with the ultimate reality.'
      }
    }
  },
  {
    id: 'ibn-khaldun',
    name: 'Ibn Khaldun',
    lifespan: '1332-1406',
    school: 'Islamic Philosophy',
    nationality: 'Arab',
    biography: 'Pioneering historian and social scientist who developed theories of social cohesion, economic cycles, and historical change.',
    keyWorks: ['The Muqaddimah', 'Kitab al-Ibar'],
    topics: {
      'society': {
        stance: 'Social Cohesion',
        summary: 'Societies rise and fall in cycles based on group solidarity (asabiyyah). Urban civilization leads to luxury and eventual decay.',
        keyQuote: 'Geography is destiny.',
        context: 'Ibn Khaldun developed one of the first systematic theories of social and economic development.'
      },
      'change': {
        stance: 'Cyclical History',
        summary: 'Historical change follows predictable patterns of rise, flourishing, and decline based on social and economic factors.',
        context: 'His analysis of historical cycles influenced later philosophers of history and sociologists.'
      }
    }
  },
  {
    id: 'dogen',
    name: 'Dōgen Zenji',
    lifespan: '1200-1253',
    school: 'Zen Buddhism',
    nationality: 'Japanese',
    biography: 'Founder of Sōtō Zen in Japan, Dōgen emphasized the practice of "just sitting" (shikantaza) as both means and end of enlightenment.',
    keyWorks: ['Shōbōgenzō', 'Eihei Kōroku', 'Fukan Zazengi'],
    topics: {
      'enlightenment': {
        stance: 'Practice-Enlightenment',
        summary: 'Practice and enlightenment are one. Sitting meditation is not a means to enlightenment but the expression of Buddha-nature itself.',
        keyQuote: 'To study the Buddha way is to study the self. To study the self is to forget the self.',
        context: 'Dōgen rejected the idea that enlightenment is something to be attained, emphasizing present-moment awakeness.'
      },
      'time': {
        stance: 'Being-Time',
        summary: 'Time and being are inseparable. Each moment of time is a complete expression of all being.',
        context: 'Dōgen\'s philosophy of time influenced both Buddhist practice and philosophical discussions of temporality.'
      }
    }
  },
  {
    id: 'al-ghazali',
    name: 'Al-Ghazali',
    lifespan: '1058-1111',
    school: 'Islamic Philosophy',
    nationality: 'Persian',
    biography: 'Influential Islamic theologian and mystic who critiqued Aristotelian philosophy and emphasized direct spiritual experience.',
    keyWorks: ['The Revival of the Religious Sciences', 'The Incoherence of the Philosophers', 'The Deliverance from Error'],
    topics: {
      'knowledge-truth': {
        stance: 'Limits of Reason',
        summary: 'Reason has limits and must be supplemented by direct spiritual experience and divine revelation for ultimate truth.',
        keyQuote: 'Remember often the destroyer of pleasures: death.',
        context: 'Al-Ghazali experienced a spiritual crisis that led him to emphasize mystical knowledge over philosophical reasoning.'
      },
      'god': {
        stance: 'Divine Occasionalism',
        summary: 'God is the only true cause. What appears as natural causation is actually God\'s continuous creative action.',
        context: 'This doctrine preserved divine sovereignty while explaining natural regularities.'
      }
    }
  },
  {
    id: 'parmenides',
    name: 'Parmenides',
    lifespan: '515-450 BCE',
    school: 'Pre-Socratic Philosophy',
    nationality: 'Greek',
    biography: 'Pre-Socratic philosopher who argued that reality is one, eternal, and unchanging, influencing later metaphysical thought.',
    keyWorks: ['On Nature'],
    topics: {
      'reality': {
        stance: 'Eternal Being',
        summary: 'True reality is one, eternal, indivisible, and unchanging. Change and plurality are illusions of the senses.',
        keyQuote: 'What is, is. What is not, is not.',
        context: 'Parmenides distinguished between the "Way of Truth" (rational understanding) and the "Way of Opinion" (sensory illusion).'
      },
      'change': {
        stance: 'Denial of Change',
        summary: 'Change is logically impossible. What exists cannot come from non-existence, nor can it cease to exist.',
        context: 'This paradox influenced later philosophers including Plato and created the problem of reconciling reason with experience.'
      }
    }
  },
  {
    id: 'heraclitus',
    name: 'Heraclitus',
    lifespan: '535-475 BCE',
    school: 'Pre-Socratic Philosophy',
    nationality: 'Greek',
    biography: 'Known as the "Dark Philosopher," Heraclitus taught that change is the fundamental nature of reality and that opposites are unified.',
    keyWorks: ['On Nature (fragments)'],
    topics: {
      'change': {
        stance: 'Universal Flux',
        summary: 'Everything flows and changes constantly. You cannot step into the same river twice because it is not the same river and you are not the same person.',
        keyQuote: 'No man ever steps in the same river twice.',
        context: 'Heraclitus saw change as the fundamental principle that gives order and meaning to the cosmos.'
      },
      'reality': {
        stance: 'Unity of Opposites',
        summary: 'Opposites are unified in a deeper harmony. Conflict and tension are necessary for the existence of all things.',
        keyQuote: 'The path up and down are one and the same.',
        context: 'This doctrine influenced dialectical thinking throughout the history of philosophy.'
      }
    }
  },
  {
    id: 'thich-nhat-hanh',
    name: 'Thích Nhất Hạnh',
    lifespan: '1926-2022',
    school: 'Engaged Buddhism',
    nationality: 'Vietnamese',
    biography: 'Zen master and peace activist who developed the concept of "Engaged Buddhism," applying mindfulness to social and political issues.',
    keyWorks: ['The Miracle of Mindfulness', 'Peace Is Every Step', 'Being Peace'],
    topics: {
      'consciousness': {
        stance: 'Mindful Living',
        summary: 'Consciousness is cultivated through mindful awareness in daily activities. Each moment offers an opportunity for awakening.',
        keyQuote: 'The present moment is the only time over which we have dominion.',
        context: 'Thích Nhất Hạnh made Buddhist mindfulness accessible to Western audiences while maintaining its depth.'
      },
      'love': {
        stance: 'Compassionate Understanding',
        summary: 'True love includes understanding, compassion, and the recognition of interconnectedness with all beings.',
        context: 'He taught that understanding suffering leads to compassion, which is the foundation of true love.'
      }
    }
  }
];