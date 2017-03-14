import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(public http: Http) {}

    public get(url: string): Observable<Response> {
        let accessToken = localStorage.getItem('access_token');

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + accessToken);
        headers.append('Accept', 'application/json');

        return this.http.get(url, {headers: headers});
    }

    public post(url: string, body: any): Observable<Response> {
        let accessToken = localStorage.getItem('access_token');

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + accessToken);
        headers.append('Accept', 'application/json');

        return this.http.post(url, body, {headers: headers});
    }

    public patch(url: string, body: any): Observable<Response> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        headers.append('Accept', 'application/json');

        return this.http.patch(url, body, {headers: headers});
    }

}
