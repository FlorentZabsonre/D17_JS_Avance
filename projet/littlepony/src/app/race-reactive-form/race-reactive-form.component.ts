import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Race } from './../race';
import { Pony } from '../pony';
import { RaceService } from './../race.service';
import { PonyServiceService } from '../pony-service.service';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form.component.html',
  styleUrls: ['./race-reactive-form.component.css']
})
export class RaceReactiveFormComponent implements OnInit {

  raceForm = this.fb.group(
    {

      ponies: [[], Validators.required],

      location: ['orleans', Validators.required],
      date: ['02/22/1991', Validators.required]
    }
  );
  dateSelectionné: NgbDateStruct;
  poneySelectionne: Array<Pony> = [];
  toutLesPoney: Array<Pony> = [];
  course: Race;
  constructor(private fb: FormBuilder, private serviceRF: RaceService, private router: Router
    , private poneyService: PonyServiceService, private calendar: NgbCalendar) {
    this.poneyService.getAllPonies().subscribe(p => this.toutLesPoney = p);
    this.dateSelectionné = this.calendar.getToday();
  }

  ngOnInit() {
  }

  onSubmit() {
    const r: Race = this.raceForm.value;
    r.date = new Date(this.dateSelectionné.year, this.dateSelectionné.month, this.dateSelectionné.day);
    this.serviceRF.addRace(r);

  }
}
