import { Component, OnInit } from '@angular/core';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private frontendservice: FrontEndServiceService) { }
  patients$ = this.frontendservice.getAllPatient()

  ngOnInit(): void {
  }

}
