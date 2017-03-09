import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
    selector: 'app-user-authenticate',
    templateUrl: 'user-authenticate.component.html',
    styleUrls: ['user-authenticate.component.css']
})
export class UserAuthenticateComponent implements OnInit {

    user: User = new User();

    constructor(public userService: UserService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        // this.presentLoading('Buscando CEP...');
        this.userService.authenticate(this.user)
            .subscribe(() => {
                alert('Login!');
            }, () => {
                alert('asdas');
            }, () => {
                alert('Erro!');
                // this.loader.dismiss();
            });
    }

}
