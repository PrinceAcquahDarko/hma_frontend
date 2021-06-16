import { Component, OnInit } from '@angular/core';
import { FrontEndServiceService } from '../front-end-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private frontservice: FrontEndServiceService) { }
  confirmMsg =  this.frontservice.key
  patient  = {
    key : this.confirmMsg,
    nhis: false
  }
  ngOnInit(): void {

  }

 
  initializePatient(): void{
    this.frontservice.initializePatient(this.patient).subscribe(
      (res) => {
        this.confirmMsg = res.message
        this.frontservice.key = '';

      }
    )
    
  }

}
