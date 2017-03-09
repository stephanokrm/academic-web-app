import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {UserService} from './users/user.service';
import {HttpService} from './shared/services/http.service';

import {AppComponent} from './app.component';
import {UserAuthenticateComponent} from './users/user-authenticate/user-authenticate.component';
import {AllRoutes} from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        UserAuthenticateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AllRoutes)
    ],
    providers: [UserService, HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
