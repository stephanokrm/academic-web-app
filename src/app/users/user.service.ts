import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpService} from '../shared/services/http.service';
import {Env} from '../app.env';
import {User} from './user';

@Injectable()
export class UserService {

    public constructor(public httpService: HttpService) {
    }

    public authenticate(user: User): Observable<Response> {
        return this.httpService.post(Env.API + 'oauth/token', user)
            .map(response => localStorage.setItem('access_token', response.json().access_token))
            .catch(this.handleError);
    }

    public store(user: User): Observable<Response> {
        return this.httpService.post(Env.API + 'api/user/store', user)
            .map(response => response.json())
            .catch(this.handleError);
    }

    public show(): Observable<Response> {
        return this.httpService.get(Env.API + 'api/user')
            .map(response => localStorage.setItem('user', JSON.stringify(response.json().user)))
            .catch(this.handleError);
    }

    public getAuthenticated(): User {
        return JSON.parse(localStorage.getItem('user'));
    }

    public handleError(error: Response | any) {
        return Observable.throw(error.json());
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('access_token') !== null;
    }
}
