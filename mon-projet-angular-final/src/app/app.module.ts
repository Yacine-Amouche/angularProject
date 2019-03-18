import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';

const appRoutes: Routes =[
    {path: 'appareil', component: AppareilViewComponent},
    {path: 'auth', component : AuthComponent},
    {path: '', component: AppareilViewComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        AuthComponent,
        AppareilViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppareilService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}