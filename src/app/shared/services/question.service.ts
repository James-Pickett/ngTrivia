import { Result } from './../models/result';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from './../../../environments/environment';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

    constructor (private apiService: ApiService) { }

    get(): Observable<Result[]> {
        return this.apiService.get(environment.opentdbApiUrl, this.buildParams())
        .map( ( data: { results: Result[] } ) => data.results );
    }

    buildParams(): URLSearchParams {
        return new URLSearchParams('amount=1&type=multiple&encode=url3986');
    }
}
