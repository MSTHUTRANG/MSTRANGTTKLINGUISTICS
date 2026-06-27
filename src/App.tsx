import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FileText, 
  CheckCircle, 
  Settings, 
  Search, 
  Award, 
  HelpCircle, 
  Layers, 
  Plus, 
  ChevronRight, 
  Info, 
  Sliders, 
  Edit3, 
  Save, 
  Copy, 
  Sparkles, 
  RefreshCw, 
  X, 
  Download, 
  Check, 
  Volume2, 
  BookOpenCheck,
  RotateCw,
  Trophy,
  Trash2
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { CHAPTER_DATA, QUESTION_DATA, FLASHCARD_DATA } from './data';
import { FLASHCARD_EXTRA_INFO } from './flashcardExamples';
import { UserCustomization, Chapter, Question, LeaderboardEntry } from './types';

// ==========================================
// BILINGUAL & ADAPTATION CONFIGURATION MAPS
// ==========================================

const EASY_TERMS_IDS = [
  'phonetics',
  'voiceless',
  'voiced',
  'borrowing',
  'compounding',
  'clipping',
  'syllable',
  'morpheme',
  'free_morpheme',
  'bound_morpheme',
  'lexical_morpheme',
  'functional_morpheme',
  'grammar',
  'syntax',
  'semantics'
];

const EASY_TERMS_OVERRIED: Record<string, { translation: string; explanation: string }> = {
  phonetics: {
    translation: 'Phonetics',
    explanation: 'The study of the physical characteristics of speech sounds, including their production, transmission, and perception.'
  },
  voiceless: {
    translation: 'Voiceless Sounds',
    explanation: 'Sounds produced when the vocal folds are spread apart, allowing air from the lungs to pass through with no vibration.'
  },
  voiced: {
    translation: 'Voiced Sounds',
    explanation: 'Sounds produced when the vocal folds are drawn close together, creating vibration as air passes through.'
  },
  borrowing: {
    translation: 'Borrowing',
    explanation: 'The process of taking words from other languages and incorporating them into one\'s own vocabulary.'
  },
  compounding: {
    translation: 'Compounding',
    explanation: 'A word-formation process that joins two separate words to produce a single, new word form.'
  },
  clipping: {
    translation: 'Clipping',
    explanation: 'A word-formation process where a word of more than one syllable is reduced to a shorter form.'
  },
  syllable: {
    translation: 'Syllable',
    explanation: 'A unit of pronunciation containing exactly one vowel sound, with or without surrounding consonants.'
  },
  morpheme: {
    translation: 'Morpheme',
    explanation: 'A minimal unit of grammatical function or semantic meaning that cannot be further analyzed.'
  },
  free_morpheme: {
    translation: 'Free Morpheme',
    explanation: 'Morphemes that can stand completely by themselves as single, independent words.'
  },
  bound_morpheme: {
    translation: 'Bound Morpheme',
    explanation: 'Morphemes that cannot stand alone as words and must always be attached to another word form.'
  },
  lexical_morpheme: {
    translation: 'Lexical Morpheme',
    explanation: 'Free morphemes that are content words carrying real-world meaning, such as nouns, verbs, and adjectives.'
  },
  functional_morpheme: {
    translation: 'Functional Morpheme',
    explanation: 'Free morphemes that serve strictly grammatical roles, such as prepositions, conjunctions, and articles.'
  },
  grammar: {
    translation: 'Grammar',
    explanation: 'The process of describing the structure of phrases and sentences to account for all grammatically correct sequences.'
  },
  syntax: {
    translation: 'Syntax',
    explanation: 'The study of the structure, ordering, and hierarchical combining of components in a sentence.'
  },
  semantics: {
    translation: 'Semantics',
    explanation: 'The systematic study of the objective, conventional meaning of words, phrases, and sentences.'
  }
};

const DETAILED_ENGLISH_EXPLANATIONS: Record<string, string> = {
  articulatory_phonetics: 'The study of speech production mechanics, describing how sounds are vocalized using anatomical articulators like the lips, teeth, tongue, and larynx.',
  acoustic_phonetics: 'The study of the physical transmission of speech sounds as sound waves in the air, analyzed via frequency, amplitude, and pitch.',
  auditory_phonetics: 'The study of speech perception, detailing how speech sound waves are received by the ear and decoded by the brain.',
  bilabial: 'Consonants articulated with both lips touching or closing to obstruct the pulmonic airflow, such as [p], [b], [m], and [w].',
  labiodental: 'Consonants articulated with the lower lip gently touching the upper incisors, such as [f] and [v].',
  dental: 'Consonants articulated with the tip of the tongue placed behind the upper front teeth or between the teeth, such as [θ] and [ð].',
  alveolar: 'Consonants articulated with the front part of the tongue touching or approaching the alveolar ridge (gum ridge), such as [t], [d], [s], [z], [n], [l], [r].',
  palatal: 'Consonants articulated with the body of the tongue raised against the hard palate, such as [ʃ], [ʒ], [tʃ], [dʒ], [j].',
  velar: 'Consonants articulated with the back of the tongue raised against the velum (soft palate), such as [k], [g], [ŋ].',
  glottal: 'Consonants articulated within the glottis (the space between the vocal folds), such as the transition [h] and the glottal stop [ʔ].',
  stop: 'Manner of articulation where the pulmonic airflow is completely blocked momentarily in the oral cavity, followed by an abrupt release.',
  fricative: 'Manner of articulation where the airflow is squeezed through an extremely narrow channel, creating continuous turbulent friction.',
  affricate: 'A complex manner of articulation starting with a complete closure (like a stop) and releasing into a short period of friction (like a fricative).',
  nasal_manner: 'Manner of articulation where the velum is lowered, sealing off the oral cavity and allowing the stream of air to escape freely through the nose.',
  liquid: 'Manner of articulation involving a relatively unobstructed airflow, either escaping around the sides of the tongue or over the curled tip.',
  glide: 'Semi-vowels produced with the tongue transitioning rapidly to or from the position of a neighboring vowel, such as [w] and [j].',
  phonology: 'The study of the abstract systems, sound patterns, and rule-based phonological arrangements structured in the minds of native speakers.',
  phone: 'The concrete, physical segment of sound uttered in actual speech, serving as the physical realization of an abstract phoneme.',
  allophone: 'Phonetic variations of a single phoneme that appear in different complementary environments and do not change word meanings.',
  minimal_pair: 'A pair of words identical in form except for one contrasting phoneme in the same position, proving that the two sounds are distinct phonemes.',
  complementary_distribution: 'The mutually exclusive distribution of allophones where one variation occurs in environments where the other can never appear.',
  assimilation: 'A phonological process where speech segments take on characteristics of adjacent sounds to optimize articulatory speed and efficiency.',
  nasalization: 'The phonological process where a vowel becomes nasalized due to the anticipation of a following nasal consonant, lowering the velum early.',
  elision: 'The complete omission of a sound segment in rapid, natural speech to ensure smooth, effortless articulatory transitions.',
  etymology: 'The historical and linguistic investigation into the origins, evolution, and semantic development of words over time.',
  calque: 'A type of borrowing where a foreign phrase is translated literally piece-by-piece into the borrowing language.',
  blending: 'A word-formation process combining parts of two distinct words (usually the beginning of one and the end of another) to create a new hybrid word.',
  backformation: 'A structural word-formation process where a word (usually a noun) is mistakenly parsed and reduced to form another category (usually a verb).',
  conversion: 'A grammatical process shifting the syntactic category of a word (e.g., from noun to verb) without changing its orthography or pronunciation.',
  coinage: 'The invention of entirely new words, often originating from brand names that eventually become generalized common nouns.',
  acronym: 'New words formed from the initial letters of a phrase, pronounced as a single continuous word.',
  derivation: 'The production of new words by attaching bound derivational affixes (prefixes, suffixes) that alter meaning or word class.',
  derivational_morpheme: 'Bound morphemes used to construct new words or shift the grammatical category of the base form, such as -ness or un-.',
  inflectional_morpheme: 'Bound grammatical suffixes used to indicate grammatical aspects (plurality, tense, comparison) without changing the word class.',
  the_8_inflections: 'The closed set of eight bound grammatical suffixes in English: plural, possessive, 3rd-person singular, progressive, past, past participle, comparative, superlative.',
  allomorph: 'A set of closely related phonetic representations (morphs) of a single underlying morpheme, determined by the environment.',
  prescriptive: 'An approach to grammar asserting rigid, arbitrary rules for correct usage, often modeled after Latin grammar structures.',
  descriptive: 'An objective approach to grammar that collects, analyzes, and documents how a language is naturally spoken and written by its native speakers.',
  generative: 'A syntactic theory proposing a finite set of rules capable of generating an infinite number of grammatically well-formed sentences.',
  phrase_structure_rules: 'Syntactic rules determining how phrases are hierarchically constructed from words and other smaller phrases.',
  syntactic_categories: 'Phonological and semantic groupings of structural blocks, such as Noun Phrases (NP), Verb Phrases (VP), and Prepositional Phrases (PP).',
  deep_structure: 'The abstract, underlying level of structural organization that represents the core syntactic relations determining meaning.',
  surface_structure: 'The outward, physical linear arrangement of a sentence as it is spoken or written.',
  structural_ambiguity: 'A linguistic phenomenon where a single surface structure can be mapped to multiple distinct deep structures, yielding multiple meanings.',
  recursion: 'The syntactic property allowing phrase structure rules to apply repeatedly within themselves, producing infinitely nested structures.',
  conceptual_meaning: 'The basic, literal, and dictionary-defined semantic components of a word, universally shared among speakers.',
  associative_meaning: 'The subjective emotional associations, cultural connotations, and personal reactions triggered by a word.',
  semantic_features: 'Binary semantic properties (+/-) used to analyze the semantic components and compatibility of nouns with verbs in sentences.',
  semantic_roles: 'The thematic roles that noun phrases fulfill in relation to the action or state described by the verb.',
  agent: 'The semantic role of the entity that actively, intentionally initiates and performs the action described by the verb.',
  theme: 'The semantic role of the entity that is directly affected, moved, or undergoing a state change due to the verb\'s action.',
  instrument: 'The semantic role of the inanimate entity used by the agent to perform the action described by the verb.',
  experiencer: 'The semantic role of the sentient entity that perceives or experiences a feeling, state, or mental process without performing an action.',
  location: 'The semantic role describing where an entity is positioned or where an event is taking place.',
  source: 'The semantic role indicating the point of origin from which an entity moves or transitions.',
  goal: 'The semantic role indicating the destination or direction toward which an entity moves or transitions.'
};

const EASY_FLASHCARDS: Record<string, { vietnameseText: string; hint: string }> = {
  'Phonetics': {
    vietnameseText: 'Phonetics (Speech Sound Study)',
    hint: 'Chapter 3 - Focuses on physical attributes of human speech production and perception.'
  },
  'Phonology': {
    vietnameseText: 'Phonology (Sound System Study)',
    hint: 'Chapter 4 - Focuses on mental and cognitive representation and sound patterns of a language.'
  },
  'Blending': {
    vietnameseText: 'Blending Process',
    hint: 'Chapter 5 - Combines the beginning of one word and the end of another. Example: brunch.'
  }
};

function getAdaptedTerm(t: any) {
  const isEasy = EASY_TERMS_IDS.includes(t.id);
  if (isEasy) {
    const override = EASY_TERMS_OVERRIED[t.id];
    return {
      ...t,
      translation: override ? override.translation : t.translation,
      explanation: override ? override.explanation : t.explanation,
      isEasy: true
    };
  } else {
    return {
      ...t,
      englishExplanation: DETAILED_ENGLISH_EXPLANATIONS[t.id] || t.definition,
      isEasy: false
    };
  }
}

function getAdaptedFlashcard(card: any) {
  const override = EASY_FLASHCARDS[card.term];
  const extraInfo = FLASHCARD_EXTRA_INFO[card.id];

  const baseCard = {
    ...card,
    vietnameseDefinition: extraInfo?.vietnameseDefinition || '',
    examples: extraInfo?.examples?.map(ex => `${ex.eng} (💡 ${ex.vie})`) || []
  };

  if (override) {
    return {
      ...baseCard,
      vietnameseText: override.vietnameseText,
      hint: override.hint,
      isEasy: true
    };
  }
  return {
    ...baseCard,
    isEasy: false
  };
}

export default function App() {
  // Tabs: 'study-guide' | 'exam' | 'flashcards'
  const [activeTab, setActiveTab] = useState<'study-guide' | 'exam' | 'flashcards'>('study-guide');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Customization State
  const [customization, setCustomization] = useState<UserCustomization>(() => {
    const saved = localStorage.getItem('linguistics_customization');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        // Force migrate any existing institution to 'ĐẠI HỌC TRÀ VINH'
        if (parsed.institution !== 'ĐẠI HỌC TRÀ VINH') {
          parsed.institution = 'ĐẠI HỌC TRÀ VINH';
        }
        // Map old dark themes or hot pink to new pastel academic themes
        const themeMap: Record<string, 'sky' | 'sage' | 'lavender' | 'cream' | 'mint'> = {
          pink: 'sky',
          blue: 'sky',
          emerald: 'sage',
          amber: 'cream',
          slate: 'lavender',
          crimson: 'sky',
          sky: 'sky',
          sage: 'sage',
          lavender: 'lavender',
          cream: 'cream',
          rose: 'sky',
          mint: 'mint'
        };
        if (!parsed.headerTheme || !themeMap[parsed.headerTheme]) {
          parsed.headerTheme = 'sky';
        } else {
          parsed.headerTheme = themeMap[parsed.headerTheme];
        }
        localStorage.setItem('linguistics_customization', JSON.stringify(parsed));
        return parsed;
      } catch (e) { /* fallback */ }
    }
    return {
      studentName: '',
      institution: 'ĐẠI HỌC TRÀ VINH',
      courseId: 'LING-402 (Linguistics Theory)',
      headerTheme: 'sky',
      includeAnswers: true,
      includeCustomNotes: true
    };
  });

  // Onboarding Join state
  const [hasJoined, setHasJoined] = useState<boolean>(() => {
    const saved = localStorage.getItem('linguistics_customization');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return !!parsed.studentName;
      } catch (e) { return false; }
    }
    return false;
  });

  // Custom User Notes per Chapter
  const [customNotes, setCustomNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('linguistics_custom_notes');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return {
      'ch3': '',
      'ch4': '',
      'ch5': '',
      'ch6': '',
      'ch7_8': '',
      'ch9': ''
    };
  });

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);
  const [flashcardLang, setFlashcardLang] = useState<'bilingual' | 'english' | 'vietnamese'>('bilingual');

  // Study Guide Learned Terms state
  const [learnedTerms, setLearnedTerms] = useState<string[]>(() => {
    const saved = localStorage.getItem('linguistics_learned_terms');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('linguistics_learned_terms', JSON.stringify(learnedTerms));
  }, [learnedTerms]);

  const handleToggleTermLearned = (termId: string) => {
    setLearnedTerms(prev => {
      if (prev.includes(termId)) {
        return prev.filter(id => id !== termId);
      } else {
        return [...prev, termId];
      }
    });
  };

  // Quiz state
  const [quizFilter, setQuizFilter] = useState<string>('all');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [quizScore, setQuizScore] = useState<number>(0);
  const [activeQuizNotification, setActiveQuizNotification] = useState<string | null>(null);

  // Leaderboard state
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    const saved = localStorage.getItem('linguistics_leaderboard');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('linguistics_leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const saveSessionToLeaderboard = () => {
    const answeredCount = Object.keys(quizSubmitted).length;
    if (answeredCount === 0) {
      showQuizFeedback('Bạn chưa trả lời câu hỏi nào!');
      return;
    }

    let chName = 'Tất cả chương';
    if (quizFilter !== 'all') {
      const ch = CHAPTER_DATA.find(c => c.id === quizFilter);
      if (ch) {
        chName = ch.number;
      }
    }

    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      studentName: customization.studentName.trim() || 'Học viên ẩn danh',
      courseId: customization.courseId.trim() || 'Lớp tự do',
      score: quizScore,
      total: answeredCount,
      percentage: Math.round((quizScore / answeredCount) * 100),
      chapterFilter: chName,
      timestamp: new Date().toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setLeaderboard(prev => {
      const updated = [newEntry, ...prev];
      return updated.sort((a, b) => {
        if (b.percentage !== a.percentage) {
          return b.percentage - a.percentage;
        }
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return b.id.localeCompare(a.id);
      }).slice(0, 15);
    });

    showQuizFeedback('Đã lưu kết quả thi thử vào Bảng Xếp Hạng!');
  };

  const clearLeaderboard = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử bảng xếp hạng không?')) {
      setLeaderboard([]);
      showQuizFeedback('Đã xóa lịch sử bảng xếp hạng!');
    }
  };

  // Copy success animation state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Save states to local storage
  useEffect(() => {
    localStorage.setItem('linguistics_customization', JSON.stringify(customization));
  }, [customization]);

  useEffect(() => {
    localStorage.setItem('linguistics_custom_notes', JSON.stringify(customNotes));
  }, [customNotes]);

  const handleCustomizationChange = (key: keyof UserCustomization, value: any) => {
    setCustomization(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNoteChange = (chapterId: string, noteText: string) => {
    setCustomNotes(prev => ({
      ...prev,
      [chapterId]: noteText
    }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Speaks out the articulatory definition (bilingual synthesis representation)
  const speakTermDetails = (termName: string, detailText: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${termName}. ${detailText}`);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Quiz score calculator
  const checkAnswer = (questionId: string, selectedOption: string) => {
    const question = QUESTION_DATA.find(q => q.id === questionId);
    if (!question) return;

    setQuizAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
    setQuizSubmitted(prev => ({ ...prev, [questionId]: true }));

    const isCorrect = question.correctAnswer === selectedOption;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      showQuizFeedback('Chính xác! Bạn đã ghi điểm.');
    } else {
      showQuizFeedback('Chưa chính xác. Tham khảo cơ sở lý thuyết bên dưới nhé.');
    }
  };

  const showQuizFeedback = (msg: string) => {
    setActiveQuizNotification(msg);
    setTimeout(() => setActiveQuizNotification(null), 3000);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted({});
    setQuizScore(0);
    showQuizFeedback('Đã làm mới toàn bộ câu hỏi ôn tập!');
  };

  const handleFlashcardMastered = (cardId: string) => {
    if (masteredCards.includes(cardId)) {
      setMasteredCards(prev => prev.filter(id => id !== cardId));
    } else {
      setMasteredCards(prev => [...prev, cardId]);
    }
  };

  // Filter Chapters for Study Guide
  const filteredChapters = CHAPTER_DATA.filter(chapter => {
    if (selectedChapterId !== 'all' && chapter.id !== selectedChapterId) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchTitle = chapter.title.toLowerCase().includes(query) || chapter.vietnameseTitle.toLowerCase().includes(query);
      const matchTerms = chapter.terms.some(t => 
        t.term.toLowerCase().includes(query) || 
        t.translation.toLowerCase().includes(query) || 
        t.definition.toLowerCase().includes(query) ||
        t.explanation.toLowerCase().includes(query)
      );
      return matchTitle || matchTerms;
    }
    return true;
  }).map(chapter => ({
    ...chapter,
    terms: chapter.terms.map(getAdaptedTerm)
  }));

  // Filter Questions for Exam Bank
  const filteredQuestions = QUESTION_DATA.filter(q => {
    if (quizFilter !== 'all' && q.chapterId !== quizFilter) return false;
    return true;
  });

  // Dynamic Theme Configurator based on Selection
  const getThemeColors = () => {
    switch (customization.headerTheme) {
      case 'sky':
        return {
          primary: 'text-sky-950 font-black',
          accent: 'text-sky-900 bg-sky-100/60 border-2 border-sky-300 shadow-sm',
          border: 'border-sky-900/40',
          btn: 'bg-sky-600 hover:bg-sky-700 text-white font-extrabold shadow-md',
          badge: 'bg-sky-100 text-sky-950 border-2 border-sky-200 font-extrabold',
          bgOuter: 'bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-100',
          bgPaper: 'bg-white border-2 border-sky-950/15 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.15)]',
          hex: '#bae6fd'
        };
      case 'sage':
        return {
          primary: 'text-emerald-950 font-black',
          accent: 'text-emerald-900 bg-emerald-100/60 border-2 border-emerald-300 shadow-sm',
          border: 'border-emerald-900/40',
          btn: 'bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-md',
          badge: 'bg-emerald-100 text-emerald-950 border-2 border-emerald-200 font-extrabold',
          bgOuter: 'bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-100',
          bgPaper: 'bg-white border-2 border-emerald-950/15 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.15)]',
          hex: '#a7f3d0'
        };
      case 'lavender':
        return {
          primary: 'text-violet-950 font-black',
          accent: 'text-violet-900 bg-violet-100/60 border-2 border-violet-300 shadow-sm',
          border: 'border-violet-900/40',
          btn: 'bg-violet-600 hover:bg-violet-700 text-white font-extrabold shadow-md',
          badge: 'bg-violet-100 text-violet-950 border-2 border-violet-200 font-extrabold',
          bgOuter: 'bg-gradient-to-tr from-violet-100 via-fuchsia-50 to-purple-100',
          bgPaper: 'bg-white border-2 border-violet-950/15 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.15)]',
          hex: '#ddd6fe'
        };
      case 'cream':
        return {
          primary: 'text-amber-950 font-black',
          accent: 'text-amber-900 bg-amber-100/60 border-2 border-amber-300 shadow-sm',
          border: 'border-amber-900/40',
          btn: 'bg-amber-600 hover:bg-amber-700 text-white font-extrabold shadow-md',
          badge: 'bg-amber-100 text-amber-950 border-2 border-amber-200 font-extrabold',
          bgOuter: 'bg-gradient-to-tr from-amber-100/70 via-orange-50 to-amber-100/50',
          bgPaper: 'bg-white border-2 border-amber-950/15 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.15)]',
          hex: '#fde68a'
        };
      case 'mint':
        return {
          primary: 'text-teal-950 font-black',
          accent: 'text-teal-900 bg-teal-100/60 border-2 border-teal-300 shadow-sm',
          border: 'border-teal-900/40',
          btn: 'bg-teal-600 hover:bg-teal-700 text-white font-extrabold shadow-md',
          badge: 'bg-teal-100 text-teal-950 border-2 border-teal-200 font-extrabold',
          bgOuter: 'bg-gradient-to-tr from-teal-100 via-emerald-50 to-teal-100',
          bgPaper: 'bg-white border-2 border-teal-950/15 shadow-[0_25px_60px_-15px_rgba(13,148,136,0.15)]',
          hex: '#ccfbf1'
        };
    }
  };

  const themeColors = getThemeColors();

  // Word Document Exporter
  const exportDoc = (type: 'study-guide' | 'exam-suite') => {
    let titleText = '';
    let contentHtml = '';
    let filename = '';
    const headerColorHex = themeColors.hex;

    const headerTemplate = `
      <div style="font-family: 'Times New Roman', Times, serif; text-align: center; margin-bottom: 35px; border-bottom: 4px double ${headerColorHex}; padding-bottom: 20px;">
        <p style="color: #64748b; font-size: 9.5pt; text-transform: uppercase; letter-spacing: 1.5px; margin: 0;">${customization.institution}</p>
        <h1 style="color: ${headerColorHex}; font-size: 20pt; font-weight: bold; margin-top: 8px; margin-bottom: 8px; font-family: 'Times New Roman', Times, serif;">${type === 'study-guide' ? 'CẨM NANG ÔN TẬP LINGUISTICS TOÀN DIỆN' : 'NGÂN HÀNG ĐỀ THI THỬ LINGUISTICS 3X'}</h1>
        <p style="color: #334155; font-size: 11pt; margin-top: 5px; margin-bottom: 5px;">Mã học phần: <strong>${customization.courseId}</strong> | Học viên: <strong>${customization.studentName}</strong></p>
        <p style="color: #64748b; font-size: 9pt; font-style: italic; margin-top: 0;">Tài liệu biên soạn chuẩn hóa theo George Yule - "The Study of Language" (7th Edition)</p>
        <p style="color: #94a3b8; font-size: 8pt; margin: 0;">Ngày xuất bản: ${new Date().toLocaleDateString('vi-VN')}</p>
      </div>
    `;

    if (type === 'study-guide') {
      filename = `Linguistics_Study_Guide_${customization.studentName.replace(/\s+/g, '_')}.doc`;
      
      let chaptersMarkup = '';
      CHAPTER_DATA.forEach(chapter => {
        let termsMarkup = '';
        chapter.terms.map(getAdaptedTerm).forEach(t => {
          const displayTranslation = t.isEasy ? t.translation : `${t.translation}`;
          const explanationHtml = t.isEasy ? 
            `<strong>Explanation:</strong> ${t.explanation}` : 
            `<strong style="color: #1e3a8a;">🇺🇸 English Explanation:</strong> ${t.englishExplanation}<br/><strong style="color: #db2777; margin-top: 5px; display: block;">🇻🇳 Phân tích Tiếng Việt (Chuyên sâu):</strong> ${t.explanation}`;

          termsMarkup += `
            <li style="margin-bottom: 14px; line-height: 1.6; list-style-type: none; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
              <strong style="color: ${headerColorHex}; font-size: 11.5pt; font-family: 'Times New Roman', Times, serif;">${t.term}</strong> 
              ${t.ipa ? `<span style="font-family: 'Times New Roman', Times, serif; color: #b45309; font-weight: bold; font-size: 10pt;">[${t.ipa}]</span>` : ''} 
              (<em style="color: #db2777; font-weight: bold;">${displayTranslation}</em>)
              <p style="margin-top: 5px; margin-bottom: 5px; color: #1e293b; font-size: 10.5pt; font-style: italic; font-weight: 500;">"${t.definition}"</p>
              <p style="margin-top: 6px; margin-bottom: 2px; color: #475569; font-size: 10pt; padding-left: 12px; border-left: 2px solid #cbd5e1; line-height: 1.5;">
                ${explanationHtml} <span style="color: #94a3b8; font-size: 8.5pt;">(${t.citation})</span>
              </p>
            </li>
          `;
        });

        let examplesMarkup = '';
        chapter.examples.forEach(ex => {
          examplesMarkup += `<li style="margin-bottom: 8px; font-size: 10.5pt; color: #334155; line-height: 1.5;">${ex}</li>`;
        });

        let treeMarkup = '';
        if (chapter.treeDiagram) {
          treeMarkup += `
            <div style="margin-top: 18px; margin-bottom: 18px; page-break-inside: avoid;">
              <p style="font-weight: bold; font-size: 11pt; color: #1e293b; font-family: 'Times New Roman', Times, serif;">Sơ đồ cây cú pháp mẫu (Generative Syntax):</p>
              <pre style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; padding: 15px; font-family: 'Consolas', 'Courier New', monospace; font-size: 9.5pt; line-height: 1.3; overflow-x: auto;">
${chapter.treeDiagram.tree}
              </pre>
              <p style="font-size: 9pt; color: #64748b; font-style: italic; margin-top: 4px;">Hình họa cây cú pháp: ${chapter.treeDiagram.description}</p>
            </div>
          `;
        }

        let userNoteMarkup = '';
        if (customization.includeCustomNotes && customNotes[chapter.id]) {
          userNoteMarkup += `
            <div style="margin-top: 15px; padding: 12px; background-color: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #d97706; margin-bottom: 15px; page-break-inside: avoid;">
              <strong style="color: #92400e; font-size: 9.5pt; text-transform: uppercase; font-family: 'Times New Roman', Times, serif; letter-spacing: 0.5px;">Ghi chú ôn tập cá nhân:</strong>
              <p style="margin: 6px 0 0 0; font-size: 10.5pt; font-style: italic; color: #78350f; line-height: 1.5;">${customNotes[chapter.id]}</p>
            </div>
          `;
        }

        chaptersMarkup += `
          <div style="margin-bottom: 40px; page-break-inside: auto;">
            <h2 style="color: ${headerColorHex}; border-bottom: 1.5px solid ${headerColorHex}; padding-bottom: 6px; margin-top: 30px; font-weight: bold; font-size: 14pt; font-family: 'Times New Roman', Times, serif;">
              ${chapter.number.toUpperCase()}: ${chapter.title.toUpperCase()}
            </h2>
            <p style="color: #64748b; font-size: 10pt; font-style: italic; margin-top: -4px; margin-bottom: 15px;">Dịch nghĩa: ${chapter.vietnameseTitle}</p>
            
            <p style="font-weight: bold; font-size: 11.5pt; color: #0f172a; margin-top: 15px; margin-bottom: 12px; font-family: 'Times New Roman', Times, serif;">I. Hệ Thống Khái Niệm Thuật Ngữ Cốt Lõi</p>
            <ul style="padding-left: 0; margin-left: 0;">
              ${termsMarkup}
            </ul>

            <p style="font-weight: bold; font-size: 11.5pt; color: #0f172a; margin-top: 25px; margin-bottom: 12px; font-family: 'Times New Roman', Times, serif;">II. Phân Tích Thực Tiễn Học Thuật (3x Case Studies)</p>
            <ul style="padding-left: 20px; list-style-type: square;">
              ${examplesMarkup}
            </ul>

            ${treeMarkup}
            ${userNoteMarkup}
          </div>
        `;
      });

      contentHtml = headerTemplate + chaptersMarkup;

    } else if (type === 'exam-suite') {
      filename = `Linguistics_Exam_Suite_${customization.studentName.replace(/\s+/g, '_')}.doc`;

      let questionsMarkup = '';
      CHAPTER_DATA.forEach(chapter => {
        const chQuestions = QUESTION_DATA.filter(q => q.chapterId === chapter.id);
        if (chQuestions.length === 0) return;

        let itemsMarkup = '';
        chQuestions.forEach((q, idx) => {
          let optionsHtml = '';
          if (q.type === 'mc' && q.options) {
            optionsHtml = '<ol style="list-style-type: lower-alpha; padding-left: 22px; margin-top: 6px; margin-bottom: 6px;">';
            q.options.forEach(opt => {
              optionsHtml += `<li style="margin-bottom: 4px; font-size: 10.5pt; color: #1e293b;">${opt}</li>`;
            });
            optionsHtml += '</ol>';
          } else if (q.type === 'tf') {
            optionsHtml = '<p style="margin: 5px 0; font-size: 10pt; color: #475569; padding-left: 10px;">Lựa chọn học thuật: <strong>True (Đúng)</strong> hoặc <strong>False (Sai)</strong></p>';
          } else {
            optionsHtml = '<p style="margin: 5px 0; font-size: 10pt; color: #475569; padding-left: 10px;">Điền khuyết thuật ngữ chính xác: ............................................................</p>';
          }

          let answerKeyHtml = '';
          if (customization.includeAnswers) {
            let readableAns = q.correctAnswer;
            if (q.type === 'tf') {
              readableAns = q.correctAnswer === 'true' ? 'ĐÚNG (True)' : 'SAI (False)';
            } else if (q.type === 'mc' && q.options) {
              const letter = String.fromCharCode(65 + parseInt(q.correctAnswer));
              readableAns = `ĐÁP ÁN ${letter}: ${q.options[parseInt(q.correctAnswer)]}`;
            }
            
            answerKeyHtml = `
              <div style="margin-top: 8px; padding: 10px 15px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-left: 4px solid #16a34a; margin-bottom: 15px; page-break-inside: avoid;">
                <p style="margin: 0; font-size: 10pt; color: #14532d; font-weight: bold;">✔️ ${readableAns}</p>
                <p style="margin: 4px 0 0 0; font-size: 9.5pt; color: #1e3a8a; font-style: italic; line-height: 1.45;"><strong>Cơ sở lý thuyết (George Yule):</strong> ${q.explanation}</p>
              </div>
            `;
          }

          itemsMarkup += `
            <div style="margin-bottom: 25px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 15px; page-break-inside: avoid;">
              <p style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0 0 6px 0; font-family: 'Times New Roman', Times, serif;">Câu hỏi ${idx + 1}: <span style="font-weight: normal; font-family: 'Times New Roman', Times, serif;">${q.questionText}</span></p>
              ${optionsHtml}
              ${answerKeyHtml}
            </div>
          `;
        });

        questionsMarkup += `
          <div style="margin-bottom: 35px;">
            <h3 style="color: ${headerColorHex}; border-left: 4px solid ${headerColorHex}; padding-left: 10px; margin-top: 25px; margin-bottom: 12px; font-weight: bold; font-size: 13pt; font-family: 'Times New Roman', Times, serif;">
              BỘ ĐỀ THI TRẮC NGHIỆM: ${chapter.title.toUpperCase()}
            </h3>
            <p style="color: #64748b; font-size: 9.5pt; font-style: italic; margin-top: -8px; margin-bottom: 15px; padding-left: 14px;">Chuyên đề ôn luyện: ${chapter.vietnameseTitle}</p>
            ${itemsMarkup}
          </div>
        `;
      });

      contentHtml = headerTemplate + questionsMarkup;
    }

    const wordStyles = `
      <style>
        body { font-family: 'Times New Roman', Times, serif; line-height: 1.5; color: #1e293b; }
        h1, h2, h3 { font-family: 'Times New Roman', Times, serif; font-weight: bold; color: ${headerColorHex}; }
        p { margin-bottom: 8px; }
        ul, ol { margin-bottom: 12px; }
        pre { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; font-family: 'Consolas', 'Courier New', monospace; font-size: 9pt; }
      </style>
    `;

    const htmlString = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>${filename}</title>
        ${wordStyles}
      </head>
      <body>
        ${contentHtml}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + htmlString], {
      type: 'application/msword;charset=utf-8'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!hasJoined) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-sky-400 via-sky-500 to-blue-500 p-4 font-sans select-none">
        <div className="w-full max-w-md bg-white border-4 border-sky-950 rounded-2xl shadow-2xl p-8 space-y-6 text-center transform transition-all hover:scale-[1.01] duration-300">
          {/* Logo / Badge */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">🏛️</span>
            <span className="text-[10px] text-sky-700 font-black uppercase tracking-widest font-mono">Trường Đào Tạo</span>
            <h2 className="text-xl font-serif font-black text-sky-950 uppercase tracking-tight">
              Đại Học Trà Vinh
            </h2>
            <div className="h-1 w-24 bg-sky-950/20 rounded mt-1"></div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight font-sans uppercase">
              CỔNG HỌC TẬP LÝ THUYẾT NGÔN NGỮ HỌC
            </h1>
            <p className="text-xs text-slate-500 font-semibold font-serif italic">
              Tài liệu ôn luyện chuẩn George Yule (7th Edition)
            </p>
          </div>

          {/* Admin & Author Details */}
          <div className="bg-[#E0F2FE] border-2 border-sky-200/80 rounded-xl p-3 text-center">
            <span className="text-[10px] text-sky-800 font-extrabold uppercase tracking-widest font-mono block">✍️ TÁC GIẢ SOẠN APP</span>
            <p className="text-sm text-sky-950 font-black">Ms. Thu Trang</p>
            <p className="text-[10px] text-sky-800/90 font-bold uppercase tracking-wider mt-1">GV TRƯỜNG TIỂU HỌC TRANG TẤN KHƯƠNG</p>
          </div>

          {/* Input field */}
          <div className="space-y-2 text-left">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">Nhập Họ và Tên của Bạn</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-950 font-bold transition-all shadow-inner"
              placeholder="Ví dụ: Nguyễn Văn A..."
              value={customization.studentName}
              onChange={(e) => handleCustomizationChange('studentName', e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customization.studentName.trim()) {
                  setHasJoined(true);
                }
              }}
            />
          </div>

          {/* Action button */}
          <button
            onClick={() => {
              if (customization.studentName.trim()) {
                setHasJoined(true);
              }
            }}
            disabled={!customization.studentName.trim()}
            className="w-full py-3.5 px-6 bg-sky-600 hover:bg-sky-700 disabled:opacity-40 disabled:hover:bg-sky-600 text-white text-sm font-black rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Bắt Đầu Học Ngay 🚀
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#E0F2FE] min-h-screen text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-950 flex flex-col md:flex-row">
      
      {/* LEFT SIDEBAR CONTROLS */}
      <aside className="w-full md:w-80 flex-none bg-white border-b md:border-b-0 md:border-r border-slate-200/80 flex flex-col h-auto md:h-screen sticky top-0 overflow-y-auto">
        
        {/* SIDEBAR TITLE HEADER */}
        <div className="p-6 border-b border-slate-150 flex flex-col gap-1 bg-sky-50/20">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏛️</span>
            <h1 className="text-sm font-black tracking-widest text-sky-950 uppercase">
              LINGUISTICS EXPORTER
            </h1>
          </div>
          <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
            Sổ tay lý thuyết & Đề thi 3X
          </p>
          <span className="text-[9px] text-slate-400 italic font-serif">
            George Yule (7th Edition)
          </span>
          <div className="mt-2 pt-2 border-t border-sky-200/60 flex flex-col gap-0.5">
            <span className="text-[9px] text-sky-800 font-extrabold uppercase tracking-widest font-mono">
              ✍️ Tác giả: Ms. Thu Trang
            </span>
            <span className="text-[9px] text-sky-700 font-bold uppercase tracking-widest font-mono">
              🏫 GV Trường Tiểu học Trang Tấn Khương
            </span>
          </div>
        </div>

        {/* WORKSPACE NAVIGATION TABS */}
        <div className="p-4 border-b border-slate-100 space-y-1">
          <label className="px-3 block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Thao Tác Ôn Luyện</label>
          
          <button 
            onClick={() => setActiveTab('study-guide')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'study-guide' ? 'bg-slate-950 text-white shadow-sm font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <BookOpen size={14} className={activeTab === 'study-guide' ? 'text-emerald-400' : 'text-slate-400'} />
            <span>Cẩm Nang Lý Thuyết</span>
          </button>

          <button 
            onClick={() => setActiveTab('exam')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'exam' ? 'bg-slate-950 text-white shadow-sm font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <FileText size={14} className={activeTab === 'exam' ? 'text-emerald-400' : 'text-slate-400'} />
            <span>Đề Thi Trắc Nghiệm</span>
          </button>

          <button 
            onClick={() => setActiveTab('flashcards')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === 'flashcards' ? 'bg-slate-950 text-white shadow-sm font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Layers size={14} className={activeTab === 'flashcards' ? 'text-emerald-400' : 'text-slate-400'} />
            <span>Thẻ Học Nhanh (Bilingual)</span>
          </button>
        </div>

        {/* DOCUMENT CONFIGURATOR PANEL */}
        <div className="p-5 border-b border-slate-100 space-y-4 bg-[#FAFBFD]/60">
          <div className="flex items-center gap-2">
            <Sliders size={13} className="text-slate-400" />
            <h3 className="font-bold text-[10px] text-slate-500 uppercase tracking-widest">Cấu hình bản in Word</h3>
          </div>

          <div className="space-y-3">
            {/* STUDENT NAME */}
            <div>
              <label className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tên Học Viên</label>
              <input 
                type="text" 
                value={customization.studentName} 
                onChange={(e) => handleCustomizationChange('studentName', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-slate-950 font-medium transition-all"
                placeholder="Tên học viên..."
              />
            </div>

            {/* COURSE ID */}
            <div>
              <label className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lớp Học Phần</label>
              <input 
                type="text" 
                value={customization.courseId} 
                onChange={(e) => handleCustomizationChange('courseId', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-slate-950 font-medium transition-all"
                placeholder="Ví dụ: ENG201..."
              />
            </div>

            {/* INSTITUTION */}
            <div>
              <label className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Trường Đào Tạo</label>
              <input 
                type="text" 
                value={customization.institution} 
                onChange={(e) => handleCustomizationChange('institution', e.target.value)}
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-slate-950 font-medium transition-all"
                placeholder="Ví dụ: Đại học Ngoại Ngữ..."
              />
            </div>

            {/* COLOR THEME SELECTOR */}
            <div>
              <label className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Màu Sắc Đại Diện Học Thuật</label>
              <div className="grid grid-cols-5 gap-1.5">
                {(['sky', 'sage', 'lavender', 'cream', 'mint'] as const).map((theme) => {
                  const colorMap = {
                    sky: 'bg-sky-300',
                    sage: 'bg-emerald-300',
                    lavender: 'bg-violet-300',
                    cream: 'bg-amber-200',
                    mint: 'bg-teal-200'
                  };
                  const labelMap = {
                    sky: 'Xanh dương nhạt (Sky Blue)',
                    sage: 'Xanh lục xám (Sage Green)',
                    lavender: 'Tím oải hương (Lavender)',
                    cream: 'Kem sữa (Warm Cream)',
                    mint: 'Xanh bạc hà (Mint Green)'
                  };
                  return (
                    <button
                      key={theme}
                      onClick={() => handleCustomizationChange('headerTheme', theme)}
                      title={labelMap[theme]}
                      className={`h-7 rounded-lg transition-all border-2 relative flex items-center justify-center ${colorMap[theme]} ${customization.headerTheme === theme ? 'ring-2 ring-slate-950 ring-offset-1 border-slate-900 scale-105' : 'border-slate-200 hover:scale-105 hover:border-slate-400'}`}
                    >
                      {customization.headerTheme === theme && <Check size={11} className="text-slate-900 font-black stroke-[3.5]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* EXPORT OPTIONS */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-600 hover:text-slate-900 font-medium transition-all">
                <input 
                  type="checkbox" 
                  checked={customization.includeAnswers} 
                  onChange={(e) => handleCustomizationChange('includeAnswers', e.target.checked)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span>Kèm Đáp Án & Phân Tích</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-[11px] text-slate-600 hover:text-slate-900 font-medium transition-all">
                <input 
                  type="checkbox" 
                  checked={customization.includeCustomNotes} 
                  onChange={(e) => handleCustomizationChange('includeCustomNotes', e.target.checked)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                />
                <span>Kèm Ghi Chú Cá Nhân</span>
              </label>
            </div>
          </div>
        </div>

        {/* CHAPTER SELECTOR IN SIDEBAR */}
        <div className="p-5 space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <BookOpenCheck size={13} className="text-slate-400" />
            <h3 className="font-bold text-[10px] text-slate-500 uppercase tracking-widest">Xem theo Chương</h3>
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => setSelectedChapterId('all')}
              className={`w-full text-left py-2 px-2.5 rounded text-xs font-semibold transition-all flex items-center justify-between ${selectedChapterId === 'all' ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span>🌍 Tất cả chương mục</span>
              <span className="bg-slate-200/60 text-slate-600 px-1 py-0.2 text-[8px] rounded font-mono font-bold">ALL</span>
            </button>

            {CHAPTER_DATA.map((ch) => (
              <button 
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`w-full text-left py-2 px-2.5 rounded text-xs font-semibold transition-all flex items-center justify-between ${selectedChapterId === ch.id ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-slate-900' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <span className="truncate">📖 {ch.number}: {ch.title}</span>
                <span className="bg-slate-100 text-slate-500 px-1 py-0.2 text-[8px] uppercase rounded font-bold font-mono">{ch.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ACADEMIC INFRA INFO */}
        <div className="p-5 border-t border-slate-150 bg-[#FCFDFE]">
          <div className="flex items-start gap-2">
            <Info size={13} className="text-slate-400 mt-0.5" />
            <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
              Sử dụng bảng mã tiếng Anh chuẩn <strong>IPA Unicode</strong> tương thích tối ưu MS Word. Tệp <strong>.doc</strong> tự động đồng bộ hóa toàn bộ sơ đồ cây.
            </p>
          </div>
        </div>

      </aside>

      {/* MAIN WORKSPACE: SIMULATED DOCUMENT DESK */}
      <main className={`flex-1 ${themeColors.bgOuter} p-4 md:p-10 flex flex-col items-center overflow-y-auto h-screen relative transition-all duration-500`}>
        
        {/* UPPER GLOBAL DOWNLOAD UTILITY BAR */}
        <div className="w-full max-w-3xl mb-6 flex flex-col sm:flex-row justify-between items-center gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-slate-900/15 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-emerald-700 font-black text-sm uppercase tracking-widest font-mono">⚡ WORKSPACE</span>
            <div className="h-4 w-[2px] bg-slate-300"></div>
            <p className="text-sm text-slate-800 font-bold">Lớp: {customization.courseId}</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              id="btn-export-guide"
              onClick={() => exportDoc('study-guide')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4.5 py-2 bg-slate-950 hover:bg-black text-white text-xs font-black rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border border-slate-950 cursor-pointer"
            >
              <Download size={14} />
              <span>Cẩm Nang (.doc)</span>
            </button>
            <button 
              id="btn-export-exam"
              onClick={() => exportDoc('exam-suite')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4.5 py-2 bg-white hover:bg-slate-50 text-slate-950 text-xs font-black rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border-2 border-slate-300 cursor-pointer"
            >
              <FileText size={14} />
              <span>Đề Thi Trắc Nghiệm (.doc)</span>
            </button>
          </div>
        </div>

        {/* NOTIFICATION FEEDBACK TOAST */}
        {activeQuizNotification && (
          <div className="fixed bottom-6 right-6 bg-slate-950 text-white border-2 border-slate-800 px-5 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-bounce">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-sm font-bold font-sans">{activeQuizNotification}</span>
          </div>
        )}

        {/* SEARCH & FILTER OVER DESK (Only shown in Study Guide) */}
        {activeTab === 'study-guide' && (
          <div className="w-full max-w-3xl mb-5 relative shadow-md rounded-xl">
            <Search size={16} className="absolute left-4 top-3.5 text-slate-500 font-black" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-white border-2 border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm placeholder:text-slate-400 font-semibold transition-all text-slate-900"
              placeholder="Gõ từ khóa để tra cứu thuật ngữ (Phoneme, Calque, 8 inflectional, deep structure, semantic roles...)"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-900 font-bold"
              >
                <X size={15} />
              </button>
            )}
          </div>
        )}

        {/* SIMULATED PRINTED PAPER CANVAS */}
        <div className={`w-full max-w-3xl ${themeColors.bgPaper} p-8 md:p-16 flex flex-col relative min-h-[1056px] transition-all duration-300`}>
          
          {/* WATERMARK STENCIL */}
          <div className="absolute top-10 right-10 text-[10px] font-mono text-slate-400 uppercase tracking-widest select-none hidden sm:block font-black">
            Linguistics Exporter // Official Handout
          </div>

          {/* ACADEMIC JOURNAL UPPER HEADING HEADER */}
          <div className="border-double-bottom border-slate-400 pb-6 mb-10 text-center flex flex-col items-center">
            <span className="text-xs text-slate-700 font-black uppercase tracking-widest font-mono">
              {customization.institution}
            </span>
            <h2 className={`text-2xl md:text-3xl font-black font-serif my-3.5 tracking-tight leading-snug ${themeColors.primary}`}>
              {activeTab === 'study-guide' 
                ? 'CẨM NANG ÔN TẬP LÝ THUYẾT NGÔN NGỮ HỌC CHUYÊN SÂU' 
                : activeTab === 'exam' 
                  ? 'NGÂN HÀNG ĐỀ THI TRẮC NGHIỆM LÝ THUYẾT 3X' 
                  : 'HỆ THỐNG THẺ HỌC NHANH TRỰC QUAN'}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-700 font-black font-mono mt-1">
              <span>Học viên: <strong className="text-slate-950 font-sans font-black underline decoration-2">{customization.studentName}</strong></span>
              <span>•</span>
              <span>Mã lớp: <strong className="text-slate-950 font-sans font-black">{customization.courseId}</strong></span>
              <span>•</span>
              <span>Chuẩn tài liệu: <strong className="text-slate-950 font-serif italic font-extrabold">George Yule (7th Ed.)</strong></span>
            </div>
          </div>

          {/* ACTIVE TAB: STUDY GUIDE PREVIEW */}
          {activeTab === 'study-guide' && (
            <div id="study-guide-workspace" className="space-y-12">
              
              {/* STUDY PROGRESS OVERVIEW GRAPH SECTION */}
              <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-5 md:p-6 shadow-sm space-y-5 animate-fade-in no-print">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b-2 border-slate-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-slate-950 text-white p-2 rounded-lg">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-wider font-mono">Tổng Quan Tiến Độ Học Tập</h4>
                      <p className="text-[10px] text-slate-500 font-bold">Thống kê số lượng khái niệm ngôn ngữ học cốt lõi đã học được</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-black text-slate-400 uppercase">Study Overview Chart</span>
                  </div>
                </div>

                {/* STATS ROW */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center shadow-sm">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider font-mono">Tổng Chương</span>
                    <p className="text-lg md:text-xl font-black text-slate-900 mt-0.5">{CHAPTER_DATA.length}</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center shadow-sm">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider font-mono">Tổng Khái Niệm</span>
                    <p className="text-lg md:text-xl font-black text-slate-900 mt-0.5">
                      {CHAPTER_DATA.reduce((acc, ch) => acc + (ch.terms?.length || 0), 0)}
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center shadow-sm">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider font-mono">Đã Học Thuộc</span>
                    <p className="text-lg md:text-xl font-black text-emerald-600 mt-0.5">{learnedTerms.length}</p>
                  </div>
                  <div className="bg-slate-950 text-white p-3.5 rounded-lg text-center shadow-md">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider font-mono">Tỷ Lệ Hoàn Thành</span>
                    <p className="text-lg md:text-xl font-black text-emerald-400 mt-0.5">
                      {Math.round((learnedTerms.length / CHAPTER_DATA.reduce((acc, ch) => acc + (ch.terms?.length || 0), 0)) * 100) || 0}%
                    </p>
                  </div>
                </div>

                {/* RECHARTS BAR CHART */}
                <div className="h-64 md:h-72 w-full bg-white border border-slate-200 p-3 rounded-lg shadow-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={CHAPTER_DATA.map(ch => {
                        const total = ch.terms?.length || 0;
                        const learned = ch.terms?.filter(t => learnedTerms.includes(t.id)).length || 0;
                        return {
                          name: ch.number,
                          "Tổng số": total,
                          "Đã học": learned
                        };
                      })}
                      margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#475569', fontSize: 10, fontWeight: 'bold', fontFamily: 'monospace' }}
                        axisLine={{ stroke: '#cbd5e1' }}
                        tickLine={{ stroke: '#cbd5e1' }}
                      />
                      <YAxis 
                        tick={{ fill: '#475569', fontSize: 10, fontWeight: 'bold', fontFamily: 'monospace' }}
                        axisLine={{ stroke: '#cbd5e1' }}
                        tickLine={{ stroke: '#cbd5e1' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          border: 'none', 
                          borderRadius: '8px', 
                          color: '#fff',
                          fontFamily: 'monospace',
                          fontSize: '11px',
                          padding: '8px 12px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                        cursor={{ fill: 'rgba(226, 232, 240, 0.4)' }}
                      />
                      <Legend 
                        verticalAlign="top" 
                        height={36} 
                        wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', fontFamily: 'monospace', color: '#1e293b' }}
                      />
                      <Bar dataKey="Tổng số" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={24} />
                      <Bar dataKey="Đã học" fill="#10b981" radius={[4, 4, 0, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-[10px] text-slate-500 italic font-medium text-center">
                  💡 *Bấm nút <strong className="text-slate-900 font-bold">"Đánh dấu đã học"</strong> bên cạnh mỗi thuật ngữ dưới đây để cập nhật biểu đồ tiến độ học tập của riêng bạn!*
                </div>
              </div>
              
              {filteredChapters.length === 0 ? (
                <div className="py-24 text-center space-y-4">
                  <div className="text-5xl">🔍</div>
                  <h4 className="font-black text-slate-900 text-lg font-serif">Không tìm thấy nội dung phù hợp</h4>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto font-medium">Thử nhập một từ khóa khác trong danh sách của bạn hoặc bấm nút bên dưới để xem lại đầy đủ nội dung.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedChapterId('all'); }}
                    className="border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-black py-2.5 px-6 rounded-lg text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    Hiển thị toàn bộ
                  </button>
                </div>
              ) : (
                filteredChapters.map((chapter) => (
                  <section key={chapter.id} className="space-y-10 animate-fade-in border-b-2 border-slate-200 pb-12 last:border-0 last:pb-0">
                    
                    {/* CHAPTER MINI-BANNER */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 pb-3.5 border-b-4 border-slate-950">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-black px-3 py-1 rounded-lg uppercase font-mono tracking-widest ${themeColors.badge}`}>
                            {chapter.number}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-black font-serif tracking-tight ${themeColors.primary}`}>
                            {chapter.title}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-800 font-extrabold font-serif italic mt-1.5">Dịch nghĩa: {chapter.vietnameseTitle}</p>
                      </div>
                      <span className="text-xs text-slate-700 font-mono font-black uppercase tracking-widest">
                        Chapter Reference
                      </span>
                    </div>

                    {/* SECTION 1: TERMS AND DEF */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-950 font-black text-sm">■</span>
                        <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-widest font-mono">I. Khái Niệm & Định Nghĩa Thuật Ngữ Cốt Lõi</h4>
                      </div>

                      <div className="divide-y-2 divide-slate-100">
                        {chapter.terms.map((t) => (
                          <div key={t.id} className="py-7 first:pt-0 last:pb-0 flex flex-col justify-between group">
                            
                            {/* TITLE & PHONETICS HEADER */}
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <h5 className={`font-serif font-black text-lg md:text-xl ${themeColors.primary}`}>
                                  {t.term}
                                </h5>
                                {t.ipa && (
                                  <span className="text-xs font-mono text-amber-950 bg-amber-100 border-2 border-amber-300 px-2.5 py-1 rounded-lg font-black shadow-sm">
                                    {t.ipa}
                                  </span>
                                )}
                                <span className="text-sm md:text-base text-blue-900 font-black font-serif italic">
                                  ({t.translation})
                                </span>
                              </div>

                              {/* TOOL ACTION BUTTONS */}
                              <div className="flex items-center gap-1.5">
                                <button 
                                  onClick={() => handleToggleTermLearned(t.id)}
                                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer transition-all border ${
                                    learnedTerms.includes(t.id) 
                                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400 font-extrabold shadow-sm' 
                                      : 'bg-white text-slate-500 border-slate-300 hover:text-slate-900 hover:border-slate-400'
                                  }`}
                                  title={learnedTerms.includes(t.id) ? "Đã thuộc lòng khái niệm" : "Đánh dấu thuộc khái niệm"}
                                >
                                  <CheckCircle size={12} className={learnedTerms.includes(t.id) ? "text-emerald-600 font-black" : ""} />
                                  <span>{learnedTerms.includes(t.id) ? 'Đã học' : 'Đánh dấu đã học'}</span>
                                </button>

                                {t.ipa && (
                                  <button 
                                    onClick={() => speakTermDetails(t.term, t.definition)}
                                    title="Phát âm tiếng Anh chuẩn"
                                    className="text-slate-500 hover:text-slate-950 hover:bg-slate-200 p-1.5 rounded-lg transition-all cursor-pointer border border-transparent hover:border-slate-300"
                                  >
                                    <Volume2 size={16} />
                                  </button>
                                )}
                                <button 
                                  onClick={() => copyToClipboard(`${t.term} [${t.ipa || ''}]: "${t.definition}" (${t.translation})`, t.id)}
                                  title="Sao chép học thuật"
                                  className="text-slate-500 hover:text-slate-950 hover:bg-slate-200 p-1.5 rounded-lg transition-all cursor-pointer border border-transparent hover:border-slate-300"
                                >
                                  {copiedId === t.id ? <Check size={16} className="text-emerald-700 font-black" /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>

                            {/* CORE ENGLISH LITERAL DEF */}
                            <p className="text-sm md:text-base text-slate-950 font-serif italic mt-3 bg-white border-2 border-slate-300/60 p-4 rounded-xl leading-relaxed font-black shadow-sm">
                              "{t.definition}"
                            </p>

                            {/* EXPLANATION */}
                            <div className="mt-4 pl-4 border-l-4 border-pink-500 text-sm md:text-base text-slate-900 leading-relaxed">
                              {t.isEasy ? (
                                <p className="font-semibold text-slate-800">
                                  <strong className="text-slate-950 font-black">Academic Analysis:</strong> {t.explanation}
                                </p>
                              ) : (
                                <div className="space-y-3">
                                  <div>
                                    <span className="inline-flex items-center gap-1 text-[10px] bg-blue-100 text-blue-900 font-extrabold px-1.5 py-0.5 rounded font-mono uppercase tracking-wider mb-1">🇺🇸 English Explanation</span>
                                    <p className="font-medium text-slate-700 italic">
                                      {t.englishExplanation}
                                    </p>
                                  </div>
                                  <div className="h-[1px] bg-pink-100"></div>
                                  <div>
                                    <span className="inline-flex items-center gap-1 text-[10px] bg-pink-100 text-pink-900 font-extrabold px-1.5 py-0.5 rounded font-mono uppercase tracking-wider mb-1">🇻🇳 Phân tích chuyên sâu (Song ngữ)</span>
                                    <p className="font-bold text-slate-950">
                                      {t.explanation}
                                    </p>
                                  </div>
                                </div>
                              )}
                              <span className="block text-xs text-slate-600 font-black uppercase tracking-widest font-mono mt-2.5">
                                Source Reference: {t.citation}
                              </span>
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 2: CASE STUDIES */}
                    <div className="space-y-5 pt-6 border-t-2 border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-950 font-black text-sm">■</span>
                        <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-widest font-mono">II. Phân Tích Thực Tiễn & Tình Huống Kinh Điển</h4>
                      </div>

                      <div className={`border-l-4 ${themeColors.border} ${themeColors.accent} p-6 space-y-4 rounded-r-xl`}>
                        {chapter.examples.map((ex, idx) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <span className="text-slate-950 font-black font-mono text-base mt-0.5">0{idx + 1}.</span>
                            <p className="text-sm md:text-base text-slate-950 leading-relaxed font-bold">{ex}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 3: GENERATIVE SYNTACTIC TREE DIAGRAM */}
                    {chapter.treeDiagram && (
                      <div className="space-y-5 pt-6 border-t-2 border-slate-200 page-break-inside-avoid">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-950 font-black text-sm">■</span>
                            <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-widest font-mono">III. Sơ Đồ Cấu Trúc Cú Pháp Học (Generative Syntactic Tree)</h4>
                          </div>
                          <span className="text-xs bg-slate-200 border-2 border-slate-300 text-slate-900 px-3 py-1 rounded-lg font-mono font-black shadow-sm">NP-VP-PP Structure</span>
                        </div>

                        <div className="bg-slate-950 text-emerald-400 p-6 rounded-xl font-mono text-xs leading-relaxed border-2 border-slate-800 overflow-x-auto relative shadow-2xl">
                          <button 
                            onClick={() => copyToClipboard(chapter.treeDiagram?.tree || '', 'tree_copy')}
                            title="Sao chép sơ đồ cây"
                            className="absolute top-4 right-4 text-slate-400 hover:text-emerald-400 bg-slate-900 p-2 rounded-lg border-2 border-slate-700 hover:scale-105 transition-all cursor-pointer"
                          >
                            {copiedId === 'tree_copy' ? <Check size={14} className="text-emerald-400 font-black" /> : <Copy size={14} />}
                          </button>
                          <pre className="select-all pt-3 block overflow-x-auto font-mono text-xs md:text-sm font-bold leading-relaxed">
                            {chapter.treeDiagram.tree}
                          </pre>
                        </div>
                        <p className="text-xs text-slate-800 font-semibold mt-2.5 pl-1.5">
                          <strong>Ghi chú sơ đồ cây:</strong> {chapter.treeDiagram.description}
                        </p>
                      </div>
                    )}

                    {/* SECTION 4: REAL-TIME USER STUDY NOTES */}
                    <div className="pt-6 border-t-2 border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 font-mono">
                          <Edit3 size={14} className="text-slate-950 font-black" />
                          <span>Ghi chú ôn tập riêng ({chapter.number})</span>
                        </label>
                        <span className="text-xs text-slate-600 font-bold italic">Dữ liệu tự động đồng bộ hóa</span>
                      </div>
                      <textarea
                        rows={3}
                        value={customNotes[chapter.id] || ''}
                        onChange={(e) => handleNoteChange(chapter.id, e.target.value)}
                        className="w-full px-4 py-3 bg-white/50 hover:bg-white text-sm border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white placeholder:italic placeholder:text-slate-400 font-sans leading-relaxed font-semibold transition-all shadow-inner text-slate-950"
                        placeholder={`Ghi lại công thức ghi nhớ nhanh hoặc ví dụ giảng viên nhấn mạnh cho ${chapter.number} ở đây...`}
                      />
                    </div>

                  </section>
                ))
              )}
            </div>
          )}

          {/* ACTIVE TAB: EXAM PRACTICE BANK */}
          {activeTab === 'exam' && (
            <div id="exam-workspace" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Content: Left Column (8 cols) */}
                <div className="lg:col-span-8 space-y-8">
                  {/* QUIZ SYSTEM CONTROLS IN EXAM */}
                  <div className="bg-white/90 border-2 border-slate-300 rounded-xl p-6 flex flex-wrap gap-4 items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-950 text-white p-2.5 rounded-lg shadow-md">
                        <Award size={18} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-wider font-mono">Trắc Nghiệm Lý Thuyết Chuyên Sâu</h4>
                        <p className="text-xs text-slate-700 font-bold">Chọn phương án đúng dựa theo giáo trình George Yule</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={quizFilter}
                        onChange={(e) => setQuizFilter(e.target.value)}
                        className="px-3 py-2 bg-white border-2 border-slate-300 rounded-lg text-xs font-black focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-900 shadow-sm"
                      >
                        <option value="all">🌍 Tất cả chương học</option>
                        {CHAPTER_DATA.map(ch => (
                          <option key={ch.id} value={ch.id}>{ch.number} ({ch.id.toUpperCase()})</option>
                        ))}
                      </select>

                      <button 
                        onClick={resetQuiz}
                        title="Đặt lại bài thi"
                        className="p-2.5 hover:bg-slate-200 rounded-lg text-slate-800 hover:text-black transition-all border-2 border-slate-300 bg-white cursor-pointer shadow-sm"
                      >
                        <RotateCw size={14} className="font-black" />
                      </button>
                    </div>
                  </div>

                  {/* QUESTIONS LIST */}
                  <div className="space-y-12 divide-y-2 divide-slate-100 bg-white border-2 border-slate-300 rounded-xl p-6 md:p-8 shadow-md">
                    {filteredQuestions.length === 0 ? (
                      <div className="text-center py-12 text-slate-500">
                        <p className="text-sm font-bold">Không tìm thấy câu hỏi phù hợp.</p>
                      </div>
                    ) : (
                      filteredQuestions.map((q, idx) => {
                        const isSubmitted = quizSubmitted[q.id];
                        const userAnswer = quizAnswers[q.id];
                        const isCorrect = q.correctAnswer === userAnswer;

                        return (
                          <div 
                            key={q.id} 
                            className="pt-10 first:pt-0 space-y-5 animate-fade-in"
                          >
                            <div className="flex justify-between items-center gap-4">
                              <span className="bg-slate-200 border-2 border-slate-300 text-slate-950 text-xs font-black font-mono px-3 py-1 rounded-lg shadow-sm">
                                CÂU HỎI {idx + 1}
                              </span>
                              <span className="text-slate-600 text-xs font-mono font-black uppercase tracking-widest">
                                {q.chapterId.toUpperCase()} REFERENCE
                              </span>
                            </div>

                            <p className="text-base md:text-lg font-black text-slate-950 leading-relaxed font-sans">
                              {q.questionText}
                            </p>

                            {/* OPTIONS SELECTOR */}
                            <div className="space-y-3 pt-2">
                              {q.type === 'tf' && (
                                <div className="grid grid-cols-2 gap-4">
                                  {['true', 'false'].map((option) => {
                                    const isSelected = userAnswer === option;
                                    const isCorrectOption = q.correctAnswer === option;
                                    
                                    let btnStyle = 'bg-white text-slate-900 border-slate-300 hover:border-slate-400';
                                    if (isSubmitted) {
                                      if (isCorrectOption) {
                                        btnStyle = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-black';
                                      } else if (isSelected) {
                                        btnStyle = 'bg-rose-100 text-rose-950 border-rose-400 line-through';
                                      } else {
                                        btnStyle = 'bg-slate-50 text-slate-400 border-slate-200';
                                      }
                                    } else if (isSelected) {
                                      btnStyle = 'bg-slate-950 text-white border-slate-950 font-black shadow-md scale-[1.01]';
                                    }

                                    return (
                                      <button
                                        key={option}
                                        disabled={isSubmitted}
                                        onClick={() => checkAnswer(q.id, option)}
                                        className={`py-3 px-5 rounded-xl text-sm font-black text-left transition-all flex items-center justify-between border-2 ${isSubmitted ? 'cursor-default' : 'cursor-pointer hover:bg-slate-100'} ${btnStyle}`}
                                      >
                                        <span>{option === 'true' ? '✔️ TRUE (Đúng)' : '❌ FALSE (Sai)'}</span>
                                        {isSubmitted && isCorrectOption && <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded font-black font-mono">ĐÚNG</span>}
                                        {isSubmitted && isSelected && !isCorrectOption && <span className="text-xs bg-rose-500 text-white px-2 py-0.5 rounded font-black font-mono">SAI</span>}
                                        {!isSubmitted && isSelected && <CheckCircle size={15} className="text-emerald-400 font-black" />}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}

                              {q.type === 'mc' && q.options && (
                                <div className="space-y-3">
                                  {q.options.map((opt, oIdx) => {
                                    const isSelected = userAnswer === String(oIdx);
                                    const isCorrectOption = q.correctAnswer === String(oIdx);
                                    const alphabet = String.fromCharCode(65 + oIdx); // A, B, C, D
                                    
                                    let btnStyle = 'bg-white text-slate-900 border-slate-300 hover:border-slate-400 font-bold';
                                    if (isSubmitted) {
                                      if (isCorrectOption) {
                                        btnStyle = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-black shadow-sm';
                                      } else if (isSelected) {
                                        btnStyle = 'bg-rose-100 text-rose-950 border-rose-400 line-through font-bold';
                                      } else {
                                        btnStyle = 'bg-slate-50 text-slate-400 border-slate-200';
                                      }
                                    } else if (isSelected) {
                                      btnStyle = 'bg-slate-950 text-white border-slate-950 font-black shadow-md scale-[1.01]';
                                    }

                                    return (
                                      <button
                                        key={oIdx}
                                        disabled={isSubmitted}
                                        onClick={() => checkAnswer(q.id, String(oIdx))}
                                        className={`w-full py-3 px-5 rounded-xl text-sm text-left transition-all flex items-center justify-between border-2 ${isSubmitted ? 'cursor-default' : 'cursor-pointer hover:bg-slate-150'} ${btnStyle}`}
                                      >
                                        <span><strong className="mr-2 font-mono text-base font-black">{alphabet}.</strong> {opt}</span>
                                        {isSubmitted && isCorrectOption && <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded font-black font-mono">ĐÚNG</span>}
                                        {isSubmitted && isSelected && !isCorrectOption && <span className="text-xs bg-rose-500 text-white px-2 py-0.5 rounded font-black font-mono">SAI</span>}
                                        {!isSubmitted && isSelected && <CheckCircle size={15} className="text-emerald-400 font-black" />}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}

                              {q.type === 'fib' && (
                                <div className="space-y-3">
                                  <div className="flex gap-3">
                                    <input 
                                      type="text"
                                      disabled={isSubmitted}
                                      placeholder="Gõ thuật ngữ bằng tiếng Anh (chữ thường)..."
                                      className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-slate-950 font-bold"
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                          checkAnswer(q.id, e.currentTarget.value.trim().toLowerCase());
                                        }
                                      }}
                                    />
                                    <button
                                      disabled={isSubmitted}
                                      onClick={(e) => {
                                        const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                        if (input) {
                                          checkAnswer(q.id, input.value.trim().toLowerCase());
                                        }
                                      }}
                                      className="bg-slate-950 hover:bg-black disabled:bg-slate-100 disabled:text-slate-400 text-white font-black px-6 rounded-xl text-sm transition-all cursor-pointer shadow-md"
                                    >
                                      Xác Nhận
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* SUBMITTED FEEDBACK PANEL */}
                            {isSubmitted && (
                              <div className={`p-5 rounded-xl border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'} space-y-2.5 animate-fade-in shadow-inner`}>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">{isCorrect ? '🎉' : '💡'}</span>
                                  <h5 className="font-black text-sm">
                                    {isCorrect ? 'Câu trả lời hoàn toàn chính xác!' : 'Đáp án chính xác đề xuất:'}
                                  </h5>
                                </div>
                                
                                {!isCorrect && (
                                  <p className="text-sm font-black">
                                    Phương án đúng: <strong className="text-emerald-950 uppercase bg-emerald-100 border-2 border-emerald-300 px-3 py-1 rounded-lg font-mono font-black">
                                      {q.type === 'tf' 
                                        ? (q.correctAnswer === 'true' ? 'True (Đúng)' : 'False (Sai)') 
                                        : (q.type === 'mc' && q.options 
                                            ? String.fromCharCode(65 + parseInt(q.correctAnswer)) + '. ' + q.options[parseInt(q.correctAnswer)]
                                            : q.correctAnswer)}
                                    </strong>
                                  </p>
                                )}

                                <p className="text-sm leading-relaxed pt-3 border-t-2 border-slate-300/30 text-slate-900 font-bold font-sans">
                                  <strong className="text-slate-950 font-black font-serif">Cơ sở lý luận khoa học:</strong> {q.explanation}
                                </p>
                              </div>
                            )}

                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Sidebar: Right Column (4 cols) */}
                <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
                  {/* PROGRESS & ACTIVE SESSION CARD */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-md space-y-4">
                    <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest font-mono flex items-center gap-2 border-b pb-2">
                      📊 Tiến Độ Hiện Tại
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                        <span className="text-xs font-bold text-slate-600">Điểm số:</span>
                        <span className="text-sm font-black text-slate-950 font-mono">{quizScore} / {Object.keys(quizSubmitted).length}</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                        <span className="text-xs font-bold text-slate-600">Tổng số câu:</span>
                        <span className="text-sm font-black text-slate-950 font-mono">{filteredQuestions.length} Câu</span>
                      </div>
                      <div className="flex justify-between items-center bg-slate-950 text-white px-3 py-2.5 rounded-lg shadow-sm">
                        <span className="text-xs font-black text-slate-400">Tỷ lệ hoàn thành:</span>
                        <span className="text-sm font-black text-emerald-400 font-mono">
                          {filteredQuestions.length > 0 ? Math.round((Object.keys(quizSubmitted).length / filteredQuestions.length) * 100) : 0}%
                        </span>
                      </div>
                    </div>

                    {/* SAVE SCORE ACTION */}
                    {Object.keys(quizSubmitted).length > 0 && (
                      <button
                        onClick={saveSessionToLeaderboard}
                        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-black text-xs rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Trophy size={14} />
                        <span>Lưu Vào Bảng Xếp Hạng</span>
                      </button>
                    )}
                  </div>

                  {/* CHAPTER PROGRESS CARD */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-md space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest font-mono flex items-center gap-2">
                        <BookOpenCheck size={14} className="text-emerald-600" />
                        <span>Tiến Độ Theo Chương</span>
                      </h4>
                      <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-tight">
                        Click để lọc câu hỏi
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* All Chapters option */}
                      <div 
                        onClick={() => setQuizFilter('all')}
                        className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                          quizFilter === 'all' 
                            ? 'bg-slate-950 text-white border-slate-950 shadow-md' 
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs font-black mb-1.5">
                          <span className="flex items-center gap-1.5">🌍 Tất Cả Chương Học</span>
                          <span className="font-mono text-[11px]">
                            {Object.keys(quizSubmitted).length} / {QUESTION_DATA.length}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              quizFilter === 'all' ? 'bg-emerald-400' : 'bg-slate-850'
                            }`}
                            style={{ width: `${QUESTION_DATA.length > 0 ? Math.round((Object.keys(quizSubmitted).length / QUESTION_DATA.length) * 100) : 0}%` }}
                          />
                        </div>
                      </div>

                      {CHAPTER_DATA.map(ch => {
                        const chQuestions = QUESTION_DATA.filter(q => q.chapterId === ch.id);
                        const totalCount = chQuestions.length;
                        if (totalCount === 0) return null; // skip if no questions

                        const answeredCount = chQuestions.filter(q => quizSubmitted[q.id]).length;
                        const correctCount = chQuestions.filter(q => quizSubmitted[q.id] && quizAnswers[q.id] === q.correctAnswer).length;
                        const percent = Math.round((answeredCount / totalCount) * 100);
                        const isActive = quizFilter === ch.id;

                        return (
                          <div 
                            key={ch.id}
                            onClick={() => setQuizFilter(ch.id)}
                            className={`p-2.5 rounded-lg border transition-all cursor-pointer space-y-2 group ${
                              isActive 
                                ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]' 
                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                            }`}
                          >
                            <div className="flex justify-between items-start gap-1">
                              <div className="min-w-0 pr-1">
                                <p className={`text-[11px] font-black truncate ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-slate-950'}`}>
                                  {ch.number}: {ch.vietnameseTitle}
                                </p>
                                <p className={`text-[9px] font-medium truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                                  {ch.title}
                                </p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                                  percent === 100 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {answeredCount}/{totalCount}
                                </span>
                              </div>
                            </div>

                            {/* Progress Bar & Success indication */}
                            <div className="space-y-1">
                              <div className={`w-full rounded-full h-1.5 overflow-hidden border ${isActive ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200/30'}`}>
                                <div 
                                  className={`h-full rounded-full transition-all duration-500 ${
                                    percent === 100 ? 'bg-emerald-500' : isActive ? 'bg-emerald-400' : 'bg-slate-900 group-hover:bg-slate-950'
                                  }`}
                                  style={{ 
                                    width: `${percent}%`
                                  }}
                                />
                              </div>
                              
                              {/* Accuracy tracker if any answered */}
                              {answeredCount > 0 && (
                                <div className="flex justify-between items-center text-[9px] font-bold">
                                  <span className={isActive ? 'text-slate-300' : 'text-slate-500'}>
                                    Đúng: {correctCount}/{answeredCount}
                                  </span>
                                  <span className={correctCount === answeredCount ? 'text-emerald-500 font-extrabold' : isActive ? 'text-emerald-400' : 'text-emerald-600'}>
                                    Tỷ lệ: {Math.round((correctCount / answeredCount) * 100)}%
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* LEADERBOARD PANEL */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-md space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest font-mono flex items-center gap-2">
                        🏆 Bảng Xếp Hạng
                      </h4>
                      {leaderboard.length > 0 && (
                        <button
                          onClick={clearLeaderboard}
                          title="Xóa bảng xếp hạng"
                          className="text-slate-400 hover:text-rose-600 transition-all cursor-pointer p-1"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>

                    {leaderboard.length === 0 ? (
                      <div className="text-center py-6 px-4 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                        <span className="text-2xl block mb-2">🏅</span>
                        <p className="text-xs text-slate-500 font-bold">Chưa có kết quả thi nào được ghi nhận.</p>
                        <p className="text-[10px] text-slate-400 mt-1">Hoàn thành các câu hỏi bên trái và bấm nút "Lưu Vào Bảng Xếp Hạng" để ghi điểm!</p>
                      </div>
                    ) : (
                      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                        {leaderboard.map((entry, index) => {
                          let rankBadge = '';
                          let rankStyle = 'bg-slate-100 text-slate-700';
                          if (index === 0) {
                            rankBadge = '🏆 🥇';
                            rankStyle = 'bg-amber-100 text-amber-800 border border-amber-300 font-black';
                          } else if (index === 1) {
                            rankBadge = '🥈';
                            rankStyle = 'bg-slate-200 text-slate-800 border border-slate-300 font-black';
                          } else if (index === 2) {
                            rankBadge = '🥉';
                            rankStyle = 'bg-orange-100 text-orange-800 border border-orange-200 font-black';
                          } else {
                            rankBadge = `#${index + 1}`;
                          }

                          return (
                            <div 
                              key={entry.id} 
                              className={`p-3 rounded-lg flex flex-col gap-1 border border-slate-100 shadow-sm transition-all hover:border-slate-300 ${index < 3 ? 'bg-gradient-to-r from-slate-50/50 to-white' : 'bg-white'}`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md flex items-center justify-center min-w-[24px] ${rankStyle}`}>
                                    {rankBadge}
                                  </span>
                                  <span className="text-xs font-black text-slate-900 truncate" title={entry.studentName}>
                                    {entry.studentName}
                                  </span>
                                </div>
                                <span className="text-xs font-mono font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50 whitespace-nowrap">
                                  {entry.score}/{entry.total} ({entry.percentage}%)
                                </span>
                              </div>
                              
                              <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold px-1 mt-1">
                                <span className="truncate max-w-[120px]" title={entry.chapterFilter}>
                                  📚 {entry.chapterFilter}
                                </span>
                                <span className="text-slate-400 font-mono text-[9px]">
                                  ⏱️ {entry.timestamp.split(' ')[0]}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ACTIVE TAB: FLASHCARDS */}
          {activeTab === 'flashcards' && (
            <div id="flashcard-workspace" className="space-y-8 animate-fade-in flex flex-col items-center justify-center">
              
              <div className="w-full bg-white/95 border-2 border-slate-300 rounded-xl p-5 flex items-center justify-between shadow-md">
                <div>
                  <h4 className="font-black text-slate-950 text-sm md:text-base uppercase tracking-wider font-mono">Thẻ ghi nhớ song ngữ học thuật</h4>
                  <p className="text-xs text-slate-700 font-semibold">Bấm vào thẻ để lật xem đáp án, định nghĩa chi tiết</p>
                </div>
                <span className="text-xs bg-slate-200/90 text-slate-950 px-3 py-1.5 rounded-lg font-black font-mono border-2 border-slate-300">
                  Thẻ {flashcardIndex + 1} / {FLASHCARD_DATA.length}
                </span>
              </div>

              {/* LANGUAGE SELECTION CONTROL */}
              <div id="flashcard-lang-selector" className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border-2 border-slate-300 shadow-sm w-full max-w-lg justify-between">
                <span className="text-xs font-black text-slate-800 uppercase tracking-wide px-2">Chế độ xem:</span>
                <div className="flex gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlashcardLang('bilingual');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${flashcardLang === 'bilingual' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    Song ngữ (EN-VI)
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlashcardLang('english');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${flashcardLang === 'english' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    Tiếng Anh (EN)
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlashcardLang('vietnamese');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${flashcardLang === 'vietnamese' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200'}`}
                  >
                    Tiếng Việt (VI)
                  </button>
                </div>
              </div>

              {/* DYNAMIC CARD INTERACTIVE OBJECT */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full max-w-lg bg-white border-4 border-slate-950 rounded-2xl p-8 text-center min-h-[350px] flex flex-col justify-between shadow-xl cursor-pointer hover:scale-[1.01] transition-all relative select-none ${isFlipped ? 'bg-slate-50 border-pink-900 shadow-pink-100/50' : ''}`}
              >
                {/* CARD TOP BAR STATUS */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] bg-slate-150 text-slate-800 font-extrabold px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                    {FLASHCARD_DATA[flashcardIndex].hint.split(' - ')[0]}
                  </span>
                  <span className="text-xs text-slate-400 font-extrabold font-mono">
                    {isFlipped ? 'REVERSE (Mặt sau)' : 'OBVERSE (Mặt trước)'}
                  </span>
                </div>

                {/* TERM / MEANING AREA */}
                <div className="py-4 space-y-4">
                  {(() => {
                    const currentCard = getAdaptedFlashcard(FLASHCARD_DATA[flashcardIndex]);
                    return !isFlipped ? (
                      <div className="animate-fade-in space-y-3">
                        {flashcardLang === 'bilingual' && (
                          <div className="space-y-1">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-serif tracking-tight">
                              {currentCard.term}
                            </h2>
                            <p className="text-sm font-extrabold text-slate-500 uppercase tracking-wide">
                              ({currentCard.vietnameseText})
                            </p>
                          </div>
                        )}
                        {flashcardLang === 'english' && (
                          <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-serif tracking-tight">
                            {currentCard.term}
                          </h2>
                        )}
                        {flashcardLang === 'vietnamese' && (
                          <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-serif tracking-tight">
                            {currentCard.vietnameseText}
                          </h2>
                        )}

                        {currentCard.ipa && (
                          <p className="font-mono text-amber-950 font-black bg-amber-100 border-2 border-amber-300 px-3 py-1 rounded-lg inline-block text-xs">
                            {currentCard.ipa}
                          </p>
                        )}
                        <p className="text-xs md:text-sm text-slate-800 font-extrabold pt-6 block leading-relaxed max-w-xs mx-auto">
                          💡 Gợi ý ôn tập: {currentCard.hint}
                        </p>
                      </div>
                    ) : (
                      <div className="animate-fade-in space-y-4 text-center">
                        <div className="space-y-2">
                          <span className="text-xs font-black uppercase text-slate-400 font-mono tracking-widest block">Định nghĩa / Definition</span>
                          {flashcardLang === 'bilingual' && (
                            <div className="space-y-3">
                              <p className="text-sm md:text-base text-slate-900 leading-relaxed font-black font-sans italic max-w-md mx-auto bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
                                "{currentCard.definition}"
                              </p>
                              {currentCard.vietnameseDefinition && (
                                <p className="text-sm md:text-base text-blue-950 leading-relaxed font-black font-sans max-w-md mx-auto bg-blue-50/60 p-4 rounded-xl border-2 border-blue-200">
                                  "💡 {currentCard.vietnameseDefinition}"
                                </p>
                              )}
                              <p className="text-xs md:text-sm text-slate-700 font-bold max-w-md mx-auto leading-relaxed pt-2">
                                {currentCard.hint.split(' - ').slice(1).join(' - ') || currentCard.hint}
                              </p>
                            </div>
                          )}
                          {flashcardLang === 'english' && (
                            <p className="text-sm md:text-base text-slate-900 leading-relaxed font-black font-sans italic max-w-md mx-auto bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
                              "{currentCard.definition}"
                            </p>
                          )}
                          {flashcardLang === 'vietnamese' && (
                            <p className="text-sm md:text-base text-slate-900 leading-relaxed font-black font-sans italic max-w-md mx-auto bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
                              "{currentCard.vietnameseDefinition || currentCard.hint}"
                            </p>
                          )}
                        </div>

                        {/* Examples Section */}
                        {currentCard.examples && currentCard.examples.length > 0 && (
                          <div className="pt-4 text-left space-y-2 border-t border-slate-150">
                            <span className="text-xs font-black uppercase text-amber-900 tracking-wider flex items-center gap-1 font-mono">
                              ⭐ Ví dụ minh họa / Examples:
                            </span>
                            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-800 font-bold">
                              {currentCard.examples.map((ex: string, idx: number) => (
                                <li key={idx} className="leading-relaxed pl-1 marker:text-amber-600">
                                  {ex}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>

                {/* BOTTOM TAP ACTION */}
                <div className="text-xs text-slate-600 font-black font-mono flex items-center justify-center gap-2 uppercase tracking-widest">
                  <RotateCw size={12} className="font-black" />
                  <span>Chạm nhẹ vào thẻ để lật mặt</span>
                </div>
              </div>

              {/* CARD CONTROLLER PANEL */}
              <div className="flex items-center gap-4">
                <button
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex(prev => prev - 1);
                    setIsFlipped(false);
                  }}
                  className="bg-white hover:bg-slate-50 border-2 border-slate-300 disabled:opacity-40 text-slate-950 font-black py-2.5 px-5 rounded-xl text-xs md:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  ◀ Trở lại
                </button>

                <button
                  onClick={() => handleFlashcardMastered(FLASHCARD_DATA[flashcardIndex].id)}
                  className={`font-black py-2.5 px-5 rounded-xl text-xs md:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${masteredCards.includes(FLASHCARD_DATA[flashcardIndex].id) ? 'bg-emerald-100 text-emerald-950 border-2 border-emerald-400' : 'bg-slate-950 text-white hover:bg-black border-2 border-slate-950'}`}
                >
                  <CheckCircle size={14} className="font-black" />
                  <span>{masteredCards.includes(FLASHCARD_DATA[flashcardIndex].id) ? 'Đã Thuộc Lòng ✔️' : 'Đánh dấu thuộc'}</span>
                </button>

                <button
                  disabled={flashcardIndex === FLASHCARD_DATA.length - 1}
                  onClick={() => {
                    setFlashcardIndex(prev => prev + 1);
                    setIsFlipped(false);
                  }}
                  className="bg-white hover:bg-slate-50 border-2 border-slate-300 disabled:opacity-40 text-slate-950 font-black py-2.5 px-5 rounded-xl text-xs md:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  Tiếp tục ▶
                </button>
              </div>

            </div>
          )}

        </div>

        {/* BOTTOM MINIMAL SIGNATURE */}
        <div className="mt-12 text-center space-y-1 pb-10">
          <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest">
            Linguistics Exporter Ultimate Workspace
          </p>
          <p className="text-[9px] text-slate-400 italic">
            Giáo trình chuẩn mực: "The Study of Language" (7th Edition) - George Yule
          </p>
        </div>

      </main>

    </div>
  );
}
