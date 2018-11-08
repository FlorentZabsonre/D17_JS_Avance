import { Component, OnInit } from '@angular/core';
import { Race } from './../race';
import { RaceService} from './../race.service';
import {Router } from '@angular/router';
import { Pony } from '../pony';
import { PonyServiceService } from '../pony-service.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;//course correspond à model
  ponies:Array<Pony>;
  dateModel: NgbDateStruct;

  constructor(private raceService:RaceService, private router:Router,
    private poneyService: PonyServiceService, private calendar: NgbCalendar) 
  {
    this.model= new Race();
    this.poneyService.getAllPonies().subscribe(p=> this.ponies=p);
    
    this.dateModel=this.calendar.getToday();
   
  
  
  }
 
  ngOnInit() {
  }

  onSubmit()
  {
    this.raceService.addRace(this.model);
 
    let concurrentsponies=this.raceService.getAllRaces;
    this.model.date = new Date(this.dateModel.year, this.dateModel.month, this.dateModel.day);
    //this.router.navigate( ['/Ponies'] );
   
    this.router.navigate( ['/Races'] );
  }

}
