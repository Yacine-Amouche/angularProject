import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils : any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
        () => {
          resolve(date);
        }, 2000
    );
  });



  constructor(private apparielService: AppareilService) {
    setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
    );
  }
  ngOnInit() {
    this.appareils = this.apparielService.appareils;
  }
  onAllumer() {
    this.apparielService.switchOnAll();

  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.apparielService.switchOffAll();
    } else {
      return null;
    }
  }

}
