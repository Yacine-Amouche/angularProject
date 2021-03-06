import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

@Injectable()

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [];

  constructor (private httpClient : HttpClient){}
  emitAppareilSubject(){
    this.appareilsSubject.next(this.appareils.slice());
  }

  getAppareilBYId(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  swithchOnAll(){
    for(let appareil of this.appareils){
      appareil.status= 'allumé';
    }
    this.emitAppareilSubject();
  }

  swithchOffAll(){
    for(let appareil of this.appareils){
      appareil.status= 'éteint';
    }
    this.emitAppareilSubject();
  }

  swithOnOne(index: number){
    this.appareils[index].status = "allumé";
    this.emitAppareilSubject();
  }

  switchOffOne(index: number){
    this.appareils[index].status = "éteint";
    this.emitAppareilSubject();
  }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
saveAppareilToServer(){
    this.httpClient.put('https://mon-projet-angular-69c40.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
        );
}
  getAppareilsFromServer() {
    this.httpClient
        .get<any[]>('https://mon-projet-angular-69c40.firebaseio.com/appareils.json')
        .subscribe(
            (response) => {
              this.appareils = response;
              this.emitAppareilSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
        );
  }
}

