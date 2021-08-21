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

  pharmInfo = {
      getDrugs: '',
      pharmAmount: ''
  }
  show = false
  constructor(private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientInfoComponent>) { }
  
  ngOnInit(): void {
    this.getUser()
  }

  populateData(): void{
    this.show = true
    this.frontendservice.populatePatientData(this.pharmInfo).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message
        this.closeDialog()
      },
      (err) => this.errororconfirmmsg = err,
      () => this.show = false
    )
  }

  closeDialog(): void{
    this.dialogRef.close({
      event: 'close', data : {info: this.pharmInfo}
    })
  }

  getUser(): void{
    this.frontendservice.getPatient().subscribe(
      res => {   
        this.pharmInfo.getDrugs = res.user.getDrugs
        this.pharmInfo.pharmAmount = res.user.pharmAmount

      }
    )
  }

}
