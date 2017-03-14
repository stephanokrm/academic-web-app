import {Routes} from '@angular/router';
import {UserAuthenticateComponent} from './users/user-authenticate/user-authenticate.component';
import {HomeComponent} from './shared/components/home/home.component';
import {UserCreateComponent} from './users/user-create/user-create.component';
import {AuthService} from './guards/auth.service';
import {GuestService} from './guards/guest.service';

export const AllRoutes: Routes = [
    {path: '', redirectTo: 'usuario/autenticacao', pathMatch: 'full'},
    {path: 'usuario/autenticacao', component: UserAuthenticateComponent, canActivate: [GuestService] },
    {path: 'usuario/criacao', component: UserCreateComponent, canActivate: [GuestService] },
    {path: 'home', component: HomeComponent, canActivate: [AuthService] }
];
