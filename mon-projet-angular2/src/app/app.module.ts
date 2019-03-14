import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { ApparielViewComponent } from './appariel-view/appariel-view.component';
import {AuthService} from './services/auth.service';
const appRoutes: Routes = [
{path: 'appariels', component : ApparielViewComponent },
  {path: 'auth', component : AuthComponent},
  {path: '', component: ApparielViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    ApparielViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AppareilService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
