import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    private baseApiUrl: string;

    constructor(private http: Http) {
        this.baseApiUrl = environment.opentdbApiUrl;
    }

    private setHeaders(): Headers {
        const headersConfig = {
            'Accept': 'application/json'
        };

        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${this.baseApiUrl}`, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map((res: Response) => res.json());
    }
}
