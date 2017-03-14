import {Component} from '@angular/core';
import {UserService} from './users/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public constructor(private userService: UserService) {

    }

    public isAuthenticated(): boolean {
        return this.userService.isAuthenticated();
    }
}
