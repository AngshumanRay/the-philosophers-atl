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
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  category: 'ethics' | 'metaphysics' | 'epistemology' | 'political' | 'aesthetics' | 'logic';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const topics: Topic[] = [
  {
    id: 'free-will',
    title: 'Free Will vs. Determinism',
    description: 'Do we have genuine choice in our actions, or are all events predetermined?',
    category: 'metaphysics',
    difficulty: 'intermediate'
  },
  {
    id: 'ethics-foundation',
    title: 'Foundation of Ethics',
    description: 'What makes actions right or wrong? Is morality universal or relative?',
    category: 'ethics',
    difficulty: 'beginner'
  },
  {
    id: 'knowledge-truth',
    title: 'Nature of Knowledge',
    description: 'How do we know what we know? What is truth?',
    category: 'epistemology',
    difficulty: 'intermediate'
  },
  {
    id: 'meaning-of-life',
    title: 'Meaning of Life',
    description: 'What gives life purpose and meaning? How should we live?',
    category: 'ethics',
    difficulty: 'beginner'
  },
  {
    id: 'mind-body',
    title: 'Mind-Body Problem',
    description: 'What is the relationship between mind and physical matter?',
    category: 'metaphysics',
    difficulty: 'advanced'
  },
  {
    id: 'justice',
    title: 'Nature of Justice',
    description: 'What constitutes a just society? How should resources be distributed?',
    category: 'political',
    difficulty: 'intermediate'
  }
];

export const philosophers: Philosopher[] = [
  {
    id: 'aristotle',
    name: 'Aristotle',
    lifespan: '384-322 BCE',
    school: 'Ancient Greek Philosophy',
    nationality: 'Greek',
    biography: 'Student of Plato and tutor to Alexander the Great, Aristotle founded the Lyceum and made foundational contributions to logic, biology, ethics, and political theory. His systematic approach to philosophy influenced Western thought for over two millennia.',
    keyWorks: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics'],
    topics: {
      'ethics-foundation': {
        stance: 'Virtue Ethics',
        summary: 'Ethics is about developing good character traits (virtues) and living in accordance with human nature. The highest good is eudaimonia - often translated as happiness or flourishing.',
        keyQuote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        context: 'Aristotle rejected both purely rule-based ethics and mere pleasure-seeking, focusing instead on character development.',
        difficulty: 'beginner'
      },
      'free-will': {
        stance: 'Compatibilist',
        summary: 'Actions are voluntary when they originate from the agent and are not done under compulsion or ignorance. We can be responsible even in a causally determined world.',
        context: 'Aristotle focused on the conditions that make actions praiseworthy or blameworthy.',
        difficulty: 'intermediate'
      },
      'justice': {
        stance: 'Distributive Justice',
        summary: 'Justice involves giving each person their due. There are different types of justice: distributive (fair allocation of resources) and corrective (addressing wrongs).',
        keyQuote: 'Justice is the constant and perpetual will to give each man his due.',
        context: 'Aristotle distinguished between different forms of equality and fairness in his political philosophy.',
        difficulty: 'intermediate'
      }
    }
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    lifespan: '1724-1804',
    school: 'German Idealism',
    nationality: 'German',
    biography: 'The central figure of modern philosophy, Kant revolutionized ethics, metaphysics, and epistemology. His "Copernican Revolution" proposed that objects conform to our knowledge rather than vice versa.',
    keyWorks: ['Critique of Pure Reason', 'Critique of Practical Reason', 'Groundwork for the Metaphysics of Morals'],
    topics: {
      'ethics-foundation': {
        stance: 'Deontological Ethics',
        summary: 'Moral worth comes from acting according to duty and universal moral laws, not consequences. The Categorical Imperative provides the supreme principle of morality.',
        keyQuote: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.',
        context: 'Kant sought to establish morality on rational grounds, independent of religion or cultural differences.',
        difficulty: 'advanced'
      },
      'knowledge-truth': {
        stance: 'Transcendental Idealism',
        summary: 'We can only know phenomena (things as they appear to us), not noumena (things in themselves). Knowledge requires both sensory experience and rational categories.',
        keyQuote: 'Thoughts without content are empty, intuitions without concepts are blind.',
        context: 'Kant aimed to show how synthetic a priori knowledge is possible, bridging rationalism and empiricism.',
        difficulty: 'advanced'
      },
      'free-will': {
        stance: 'Transcendental Freedom',
        summary: 'We must presuppose freedom as rational beings capable of moral action, even though we cannot prove it theoretically. Freedom is necessary for moral responsibility.',
        context: 'Kant argued that moral obligation implies the ability to act freely, even in a deterministic natural world.',
        difficulty: 'advanced'
      }
    }
  },
  {
    id: 'mill',
    name: 'John Stuart Mill',
    lifespan: '1806-1873',
    school: 'Utilitarianism',
    nationality: 'British',
    biography: 'A leading figure in classical liberalism and utilitarianism, Mill championed individual liberty, women\'s rights, and the greatest happiness principle. His harm principle remains influential in political philosophy.',
    keyWorks: ['On Liberty', 'Utilitarianism', 'The Subjection of Women', 'A System of Logic'],
    topics: {
      'ethics-foundation': {
        stance: 'Utilitarianism',
        summary: 'Actions are right insofar as they promote happiness and wrong as they produce the opposite. The goal is the greatest happiness for the greatest number.',
        keyQuote: 'The greatest happiness principle holds that actions are right in proportion as they tend to promote happiness.',
        context: 'Mill refined Bentham\'s hedonistic calculus and argued for qualitative differences in pleasures.',
        difficulty: 'beginner'
      },
      'justice': {
        stance: 'Liberal Justice',
        summary: 'Justice is grounded in utility but includes strong protections for individual rights. Society should not interfere with individual liberty except to prevent harm to others.',
        keyQuote: 'The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.',
        context: 'Mill\'s harm principle attempts to balance individual freedom with social welfare.',
        difficulty: 'intermediate'
      },
      'knowledge-truth': {
        stance: 'Empiricism',
        summary: 'All knowledge comes from experience. Even mathematical truths are derived from empirical generalizations, though Mill later modified this view.',
        context: 'Mill developed inductive methods for scientific reasoning and argued against a priori knowledge.',
        difficulty: 'intermediate'
      }
    }
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    lifespan: '1844-1900',
    school: 'Continental Philosophy',
    nationality: 'German',
    biography: 'A radical critic of traditional morality and religion, Nietzsche proclaimed the "death of God" and called for the creation of new values. His concepts of the Übermensch and eternal recurrence deeply influenced existentialism.',
    keyWorks: ['Beyond Good and Evil', 'Thus Spoke Zarathustra', 'The Genealogy of Morals', 'The Gay Science'],
    topics: {
      'ethics-foundation': {
        stance: 'Moral Nihilism/Perspectivism',
        summary: 'Traditional moral values are human creations that have outlived their usefulness. We must create new values based on life-affirmation rather than life-denial.',
        keyQuote: 'There are no moral phenomena at all, but only a moral interpretation of phenomena.',
        context: 'Nietzsche saw Christian morality as a "slave morality" that suppresses human potential and creativity.',
        difficulty: 'advanced'
      },
      'meaning-of-life': {
        stance: 'Self-Creation',
        summary: 'Life has no inherent meaning; we must create our own purpose. The Übermensch represents humanity\'s potential to transcend traditional limitations and create meaning.',
        keyQuote: 'Become who you are.',
        context: 'Nietzsche rejected both religious and secular attempts to find objective meaning in existence.',
        difficulty: 'intermediate'
      },
      'knowledge-truth': {
        stance: 'Perspectivism',
        summary: 'There are no absolute truths, only perspectives shaped by our values and interests. "Truth" is often a useful fiction that serves human purposes.',
        keyQuote: 'There are no facts, only interpretations.',
        context: 'Nietzsche challenged the entire Western philosophical tradition\'s quest for absolute truth.',
        difficulty: 'advanced'
      }
    }
  },
  {
    id: 'sartre',
    name: 'Jean-Paul Sartre',
    lifespan: '1905-1980',
    school: 'Existentialism',
    nationality: 'French',
    biography: 'The leading figure of existentialism, Sartre argued that "existence precedes essence" - we exist first and create our nature through our choices. He was also a playwright, novelist, and political activist.',
    keyWorks: ['Being and Nothingness', 'Existentialism is a Humanism', 'No Exit', 'Nausea'],
    topics: {
      'free-will': {
        stance: 'Radical Freedom',
        summary: 'Humans are "condemned to be free" - we have complete responsibility for our choices and cannot escape the burden of freedom through bad faith or deterministic excuses.',
        keyQuote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
        context: 'Sartre rejected all attempts to limit human freedom through appeals to God, nature, or social determinism.',
        difficulty: 'intermediate'
      },
      'meaning-of-life': {
        stance: 'Existentialism',
        summary: 'Life begins without predetermined essence or purpose. We must create our own meaning through authentic choices and take full responsibility for our existence.',
        keyQuote: 'Existence precedes essence.',
        context: 'Sartre emphasized the anxiety and responsibility that comes with recognizing our absolute freedom.',
        difficulty: 'beginner'
      },
      'ethics-foundation': {
        stance: 'Existential Ethics',
        summary: 'There are no predetermined moral values. We must choose our values through our actions, and in doing so, we choose for all humanity what we believe humans should do.',
        context: 'Sartre argued that even rejecting morality is itself a moral choice that has implications for everyone.',
        difficulty: 'advanced'
      }
    }
  },
  {
    id: 'rawls',
    name: 'John Rawls',
    lifespan: '1921-2002',
    school: 'Political Liberalism',
    nationality: 'American',
    biography: 'Rawls revolutionized political philosophy with "A Theory of Justice," introducing the concept of justice as fairness and the original position thought experiment. His work revived social contract theory.',
    keyWorks: ['A Theory of Justice', 'Political Liberalism', 'The Law of Peoples'],
    topics: {
      'justice': {
        stance: 'Justice as Fairness',
        summary: 'Justice is determined by principles that free and equal persons would choose from behind a "veil of ignorance." This leads to equal basic liberties and the difference principle.',
        keyQuote: 'Justice is the first virtue of social institutions.',
        context: 'Rawls sought to create a fair procedure for determining the principles of justice in a pluralistic society.',
        difficulty: 'intermediate'
      },
      'ethics-foundation': {
        stance: 'Political Constructivism',
        summary: 'Political principles should be justified through public reason that all citizens can accept, regardless of their comprehensive moral or religious views.',
        context: 'Rawls distinguished between political justice and comprehensive moral doctrines.',
        difficulty: 'advanced'
      }
    }
  }
];