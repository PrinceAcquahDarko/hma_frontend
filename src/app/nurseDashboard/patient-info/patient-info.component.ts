import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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

  show = false
  constructor(private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientInfoComponent>) { }
  
  ngOnInit(): void {
    this.getUser()
  }

  populateData(){
    this.show = true
    this.frontendservice.populatePatientData(this.appearance).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message;
        this.closeDialog();
      },
      (err) => this.errororconfirmmsg = err,
      () => {this.show = false}
    )
  }


  closeDialog(): void{
    this.dialogRef.close({
      event: 'close', data : {info: this.appearance}
    })

  }


  getUser(): void{
    this.frontendservice.getPatient().subscribe(
      res => {   
        this.appearance.bloodpressure = res.user.bloodpressure
        this.appearance.height = res.user.height
        this.appearance.temperature = res.user.temperature
        this.appearance.weight = res.user.weight
      }
    )
  }
}
