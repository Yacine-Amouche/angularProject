import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appariel-view',
  templateUrl: './appariel-view.component.html',
  styleUrls: ['./appariel-view.component.scss']
})
export class ApparielViewComponent implements OnInit {
  authStatus: boolean;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authservice.isAuth;

  }
onSingIn(){

    this.authservice.singIn().then(

        () => {
          console.log("je suis connecter");
          this.authStatus = this.authservice.isAuth;
          this.router.navigate(['appariels']);

  }
    );
}
onSingOut(){
    this.authservice.signOut();
    this.authStatus =
        this.authservice.isAuth;
}
}
