import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {NotificationsService} from 'angular2-notifications';
import {TranslateService} from '../../shared/services/translate.service';

@Component({
    selector: 'app-user-authenticate',
    templateUrl: 'user-authenticate.component.html',
    styleUrls: ['user-authenticate.component.css']
})
export class UserAuthenticateComponent implements OnInit {

    private user: User;
    private options: any = {timeOut: 5000};

    constructor(public userService: UserService, private notificationsService: NotificationsService, private translateService: TranslateService) {
        this.user = new User();
    }

    ngOnInit() {
    }

    onSubmit() {
        this.options.timeOut = 0;
        this.notificationsService.info('Entrando...', 'Fazendo requisição.');
        this.userService.authenticate(this.user)
            .subscribe(() => {
                this.notificationsService.remove();
            }, error => {
                this.notificationsService.remove();
                this.options.timeOut = 5000;
                this.notificationsService.error(
                    this.translateService.translate(error.error),
                    this.translateService.translate(error.message)
                );
            });
    }

}
