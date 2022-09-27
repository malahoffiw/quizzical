export interface QuestionData {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface QuestionType {
    id: number;
    question: string;
    answers: Answer[]
}

export interface Answer {
    text: string;
    correct: boolean;
    chosenCorr: boolean;
    chosenFalse: boolean;
}

export interface Settings {
    difficulty: string;
    questionsAmount: string;
    category?: string;
}
