export interface Term {
  id: string;
  term: string;
  ipa?: string;
  translation: string;
  definition: string;
  citation: string;
  explanation: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  vietnameseTitle: string;
  terms: Term[];
  examples: string[];
  treeDiagram?: {
    sentence: string;
    description: string;
    tree: string;
  };
  extraContent?: string;
}

export interface Question {
  id: string;
  chapterId: string;
  type: 'tf' | 'mc' | 'fib'; // True/False, Multiple Choice, Fill in the blanks
  questionText: string;
  options?: string[]; // For MC
  correctAnswer: string; // "true" or "false" for TF, index or value for MC, text for FIB
  explanation: string;
}

export interface UserCustomization {
  studentName: string;
  institution: string;
  courseId: string;
  headerTheme: 'sky' | 'sage' | 'lavender' | 'cream' | 'mint';
  includeAnswers: boolean;
  includeCustomNotes: boolean;
}

export interface Flashcard {
  id: string;
  term: string;
  ipa?: string;
  definition: string;
  vietnameseDefinition?: string;
  vietnameseText: string;
  hint: string;
  examples?: string[];
  vietnameseExamples?: string[];
}

export interface LeaderboardEntry {
  id: string;
  studentName: string;
  courseId: string;
  score: number;
  total: number;
  percentage: number;
  chapterFilter: string;
  timestamp: string;
}

