import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyServiceService } from './../pony-service.service';
import { Pony } from '../pony';
@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  pony: Pony;
  constructor(private route: ActivatedRoute, private ponyService: PonyServiceService) {
   this.pony= new Pony();
   }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ponyService.getPony(id).subscribe(p =>this.pony=p);

  }

}
