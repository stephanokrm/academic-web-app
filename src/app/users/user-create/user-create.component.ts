import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import {NotificationsService} from 'angular2-notifications';
import {TranslateService} from '../../shared/services/translate.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css'],

})
export class UserCreateComponent {

    private user: User;
    private options: any = {timeOut: 5000};

    public constructor(private userService: UserService, private notificationsService: NotificationsService, private translateService: TranslateService, private router: Router) {
        this.user = new User();
    }

    public onSubmit(): void {
        this.handleLoading('Salvando seu perfil.');
        this.userService.store(this.user)
            .subscribe(() => {
                this.notificationsService.remove();
                this.authenticate();
            }, () => {
                this.handleError('Dados inválidos', 'Verifique seus dados.');
            });
    }

    private authenticate(): void {
        this.handleLoading('Entrando com seu perfil.');
        this.user.username = this.user.email;
        this.userService.authenticate(this.user)
            .subscribe(
                () => {
                    this.notificationsService.remove();
                    this.router.navigate(['/home']);
                },
                error => this.handleError(
                    this.translateService.translate(error.error),
                    this.translateService.translate(error.message)
                )
            );
    }

    private handleLoading(message: string): void {
        this.options.timeOut = 0;
        this.notificationsService.info('Carregando...', message);
    }

    private handleError(error: string, message: string): void {
        this.notificationsService.remove();
        this.options.timeOut = 5000;
        this.notificationsService.error(error, message);
    }
}
