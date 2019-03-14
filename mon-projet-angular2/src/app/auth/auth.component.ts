import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  lastUpdate = new Date();
  isAuth = false;
  appariels: any[];

  constructor(private apparielService: AppareilService, private routes: Router) {
    setTimeout(

        () => {
          this.isAuth = true;
        },4000
    );
  }
  ngOnInit() {
    this.appariels = this.apparielService.appariels;
  }

  onAllumer() {
    this.apparielService.switchOnAll();
    console.log("on allume tout !");
  }
  onEtiendre(){
    this.apparielService.switchOffAll();
    console.log("on etiendre tout !");
  }


}
