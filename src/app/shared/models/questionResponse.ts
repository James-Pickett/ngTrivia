import { Result } from './result';

// represents a response from https://opentdb.com/ api
export class QuestionResponse {
    response_code: number;
    results: Result[];
}
