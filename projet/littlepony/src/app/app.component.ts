import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'littlepony';
  currentUser = new User('Toto');
  identifiant: string;
  constructor() {
    sessionStorage.setItem('user', this.currentUser.loging);
    this.identifiant= sessionStorage.getItem('user');
  }
}


