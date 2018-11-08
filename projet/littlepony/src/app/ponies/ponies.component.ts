import { Component, OnInit } from '@angular/core';
import { Pony } from './../pony';
import {PonyServiceService} from '../pony-service.service';
@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
ponies: Array<Pony> = [];
  constructor(private service: PonyServiceService) {
    this.service.getAllPonies().subscribe(p => this.ponies = p);
/*
    this.ponies=[];
    this.ponies.push(new Pony ('rainbow', 6 , 10 , 'black'));
    this.ponies.push(new Pony ('bond', 6 , 10 , 'brown'));
    console.log(this.ponies);
  
  */
 }
   
  ngOnInit() {
   
  }

  delete(id: number){
    this.service.deletePony(id);
  }
}
