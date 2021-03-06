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
  labInfo = {
    getLab: '',
    labAmount: ''
  }

  show = false
  constructor(private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientInfoComponent>) { }

  ngOnInit(): void {
    this.getUser();
  }

  populateData(): void{
    this.show = true;
    this.frontendservice.populatePatientData(this.labInfo).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message;
        this.closeDialog()
      },
      (err) => {
        this.errororconfirmmsg = err
      },
      () => {this.show = false}
    )
  }

  closeDialog(): void{
    this.dialogRef.close({
      event: 'close', data : {info: this.labInfo}
    })

  }
  getUser(): void{
    this.frontendservice.getPatient().subscribe(
      res => {   
        this.labInfo.getLab = res.user.getLab
        this.labInfo.labAmount = res.user.labAmount
      }
    )
  }

}
