import {Routes} from '@angular/router';
import {UserAuthenticateComponent} from './users/user-authenticate/user-authenticate.component';
import {UserCreateComponent} from './users/user-create/user-create.component';

export const AllRoutes: Routes = [
    {path: '', redirectTo: 'usuario/autenticacao', pathMatch: 'full'},
    {path: 'usuario/autenticar', component: UserAuthenticateComponent},
    {path: 'usuario/criar', component: UserCreateComponent}
];
