import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {SimpleNotificationsModule} from 'angular2-notifications';

import {UserService} from './users/user.service';
import {HttpService} from './shared/services/http.service';
import {TranslateService} from './shared/services/translate.service';
import {AuthService} from './guards/auth.service';
import {GuestService} from './guards/guest.service';

import {AppComponent} from './app.component';
import {UserAuthenticateComponent} from './users/user-authenticate/user-authenticate.component';
import {AllRoutes} from './app.routes';
import {UserCreateComponent} from './users/user-create/user-create.component';
import {HomeComponent} from './shared/components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        UserAuthenticateComponent,
        UserCreateComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AllRoutes),
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        UserService,
        HttpService,
        TranslateService,
        AuthService,
        GuestService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
