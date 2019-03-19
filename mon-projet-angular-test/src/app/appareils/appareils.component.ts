import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {


  @Input() appareilName: string;
  @Input() appareilSatatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;
  constructor(private appareilService: AppareilService) { }


  ngOnInit() {
  }

  getSatatus(){
    return this.appareilSatatus;
  }

  getColor(){
    if(this.appareilSatatus==="allumé"){
      return 'green';
    }else if(this.appareilSatatus==="éteint"){
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.swithOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }



}
