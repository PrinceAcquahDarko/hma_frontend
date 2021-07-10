import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
  }
  route(value: boolean){
    if(value)
      this.router.navigate(['../patientDetails'], {relativeTo: this.routes})
  
  }

}
