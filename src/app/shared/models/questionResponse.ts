import { Result } from './result';

// represents a response from https://opentdb.com/ api
export interface QuestionResponse {
    response_code: number;
    results: Result[];
}
