import { Component, OnInit } from '@angular/core';
import { Pony } from './../pony';
import { PonyServiceService } from './../pony-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pony-form',
  templateUrl: './pony-form.component.html',
  styleUrls: ['./pony-form.component.css']
})
export class PonyFormComponent implements OnInit {
  model: Pony;
  add: boolean;
  constructor(private service: PonyServiceService, private router: Router, private route: ActivatedRoute) {
    this.model = new Pony();

  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.service.getPony(id).subscribe(p => this.model = p);
    }
  }

  onSubmit() {
    if (this.add) {
      this.service.addPony(this.model);
      this.model = new Pony();
      this.router.navigate(['/lesPoneys']);
    } else {
      const p = this.model;
      this.service.updatePony(p.id, p);
    }

  }

}
