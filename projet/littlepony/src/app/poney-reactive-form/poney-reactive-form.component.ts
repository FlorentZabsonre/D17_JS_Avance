import { Component, OnInit } from '@angular/core';
import{ FormBuilder, Validators} from '@angular/forms';
import { Pony } from './../pony';
import { PonyServiceService } from '../pony-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-poney-reactive-form',
  templateUrl: './poney-reactive-form.component.html',
  styleUrls: ['./poney-reactive-form.component.css']
})
export class PoneyReactiveFormComponent implements OnInit {

  ponyForm=this.fb.group(
    {
      name: ['nom',Validators.required],
      age: ['0',Validators.required],
      color: ['vert',Validators.required],
      weight:['0',Validators.required]
    }
  );
  constructor(private fb: FormBuilder,private serviceRF: PonyServiceService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit()  
  {
    const p: Pony = this.ponyForm.value;
    p.id=0;
    this.serviceRF.addPony(p);
   
  }
}
