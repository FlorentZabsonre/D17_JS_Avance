import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony';
@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {
 @Input() pony: Pony;
 // @Input() jack: Pony;
  constructor() { 

    //this.pony= new Pony ('rainbow', 6 , 10 , 'black');
    //this.jack= new Pony ('bond', 6 , 10 , 'brown');
  }

  ngOnInit() {
  }

}
