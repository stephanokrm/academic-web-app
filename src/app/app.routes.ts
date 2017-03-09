import {Routes} from '@angular/router';
import {UserAuthenticateComponent} from './users/user-authenticate/user-authenticate.component';

export const AllRoutes: Routes = [
    {path: '', redirectTo: 'user-authenticate', pathMatch: 'full'},
    {path: 'user-authenticate', component: UserAuthenticateComponent}
];
