import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { PONIES } from './ponies-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PonyServiceService {
  ponies: Array<Pony>;
  url: String = 'http://localhost:8090/api/ponies';
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
  constructor(private http: HttpClient, private router: Router) {
    //this.ponies = [];
    //this.ponies= PONIES;
    //this.http.get<Array<Pony>>(this.url + '/', this.httpOptions).subscribe(p => {console.log(p);this.ponies = p;});

  }

  getAllPonies(): Observable<Array<Pony>> {
    // return of(this.ponies);
    return this.http.get<Array<Pony>>(this.url + "/lesPoneys", this.httpOptions);
  }

  addPony(p: Pony): void {
    //this.ponies.push(p);
    this.http.post(this.url + '/addPony', p, this.httpOptions).subscribe(() => this.router.navigate(['/lesPoneys']));
  }

  getPony(id: number): Observable<Pony> {
    return this.http.get<Pony>(this.url + '/pony/' +id, this.httpOptions);
  }
  
  deletePony(id: number):void {
    //return null;
   this.http.delete(this.url+'/deletePony/'+id,this.httpOptions).subscribe( () => this.router.navigate( ['/']));
    
  
  }
  
  
  updatePony(id: number, p: Pony) {
    this.http.put(this.url + '/update/' + id, p, this.httpOptions).subscribe(() => this.router.navigate(['/lesPoneys']));
  }

}
