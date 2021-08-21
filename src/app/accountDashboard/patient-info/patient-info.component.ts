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
  accInfo = {
    amountPaid: 0,
    paid: false,
    done: false
  }

  show = false
  constructor(private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientInfoComponent>) { }

  ngOnInit(): void {
    this.getUser()
  }

  populateData(): void{
    this.show = true
    if(this.accInfo.paid){
      this.accInfo.done = true
    }
    this.frontendservice.populatePatientData(this.accInfo).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message
      },
      () => this.show = false
    )
  }

  getUser(): void{
    this.frontendservice.getPatient().subscribe(
      res => {   
        this.accInfo.amountPaid = res.user.amountPaid
        this.accInfo.paid = res.user.paid

      }
    )
  }

  closeDialog(): void{
    this.dialogRef.close({
      event: 'close', data : {info: this.accInfo}
    })
  }

}
