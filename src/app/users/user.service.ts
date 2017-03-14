import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpService} from '../shared/services/http.service';
import {Env} from '../app.env';
import {User} from './user';

@Injectable()
export class UserService {

    constructor(public httpService: HttpService) {
    }

    authenticate(user: User) {
        return this.httpService.post(Env.API + 'oauth/token', user)
            .map(response => {
                localStorage.setItem('access_token', response.json().access_token);
            })
            .catch(this.handleError);
    }

    store(user: User) {
        return this.httpService.post(Env.API + 'api/user/store', user)
            .map(response => response.json())
            .catch(this.handleError);
    }

    handleError(error: Response | any) {
        return Observable.throw(error.json());
    }

}
