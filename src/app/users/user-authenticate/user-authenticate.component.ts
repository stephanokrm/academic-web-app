import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import {NotificationsService} from 'angular2-notifications';
import {TranslateService} from '../../shared/services/translate.service';
import {StyleService} from '../../shared/services/style.service';

@Component({
    selector: 'app-user-authenticate',
    templateUrl: 'user-authenticate.component.html',
    styleUrls: ['user-authenticate.component.css']
})
export class UserAuthenticateComponent {

    private user: User;
    private options: any = {timeOut: 5000};
    private lightBlue: string = '#03A9F4';

    public constructor(private userService: UserService, private notificationsService: NotificationsService, private translateService: TranslateService, private router: Router, private styleService: StyleService) {
        this.user = new User();
        this.styleService.setBodyBackgroundColor(this.lightBlue);
    }

    public onSubmit(): void {
        this.handleLoading('Entrando com seu perfil.');
        this.userService.authenticate(this.user)
            .subscribe(
                () => {
                    this.notificationsService.remove();
                    this.router.navigate(['/home']);
                },
                error => this.handleError(error)
            );
    }

    private handleLoading(message: string): void {
        this.options.timeOut = 0;
        this.notificationsService.info('Carregando...', message);
    }

    private handleError(error): void {
        this.notificationsService.remove();
        this.options.timeOut = 5000;
        this.notificationsService.error(
            this.translateService.translate(error.error),
            this.translateService.translate(error.message)
        );
    }

}
