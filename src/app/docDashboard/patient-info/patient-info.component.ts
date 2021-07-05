import { Component, OnInit } from '@angular/core';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  errororconfirmmsg: string = ''
  doctorsInfo = {
    postDrugs: '',
    postLab: '',
    illness: '',
    symptoms: ''
  }
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
  }

  populateData(): void{
    this.frontendservice.populatePatientData(this.doctorsInfo).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message
      }
    )
  }

}