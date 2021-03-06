import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Date();
  appareils: any[];
  appareilSubscription: Subscription;
  constructor(private appareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth=true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.swithchOnAll();
  }
  onEteindre(){
    this.appareilService.swithchOffAll();
  }
  onSave() {
    this.appareilService.saveAppareilToServer();
  }
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

}
