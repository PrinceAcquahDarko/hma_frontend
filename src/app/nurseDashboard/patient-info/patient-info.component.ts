import { Component, OnInit } from '@angular/core';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  errororconfirmmsg = ''
  appearance = {
    temperature: '',
    weight: '',
    bloodpressure: '',
    height: ''
  }
  constructor(private frontendservice: FrontEndServiceService) { }
  
  ngOnInit(): void {
  }

  populateData(){
    this.frontendservice.populatePatientData(this.appearance).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message
      },
      (err) => this.errororconfirmmsg = err
    )
  }
}
