import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RaceService {
  races: Array<Race>;
  url: String = 'http://localhost:8090/api/races';
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient,private router:Router) {

    // this.races=RACES;
  }

  getAllRaces(): Observable<Array<Race>> {
    // return of(this.races);
    return this.http.get<Array<Race>>(this.url + '/', this.httpOptions);
  }
  addRace(race: Race): void {
    //his.races.push(race);
    this.http.post(this.url +'/addRace',race,this.httpOptions).subscribe(()=> this.router.navigate(['/']) );
  }
}
