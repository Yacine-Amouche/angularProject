import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() apparielName: string;
@Input() apparielStatus: string;
@Input() indexOfAppariel: number;
  constructor(private apparielService: AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
    return this.apparielStatus;

  }
  getColor(){
   if(this.apparielStatus === 'allumer'){
     return 'green';
   }else if(this.apparielStatus === 'éteint'){
     return 'red';
   }
  }
onSwitchON(){
    this.apparielService.switchOnOne(this.indexOfAppariel);
  }
  onSwitchOFF(){
    this.apparielService.switchOffOne(this.indexOfAppariel);
  }
}

