// represents a question pull from https://opentdb.com/ api
export class Result {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    allAnswers: string[];
}
