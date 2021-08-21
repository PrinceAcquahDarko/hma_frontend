import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient-populate',
  templateUrl: './patient-populate.component.html',
  styleUrls: ['./patient-populate.component.css']
})
export class PatientPopulateComponent implements OnInit {
  errororconfirmmsg = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientPopulateComponent>) { }
  user = this.data.patient

  ngOnInit(): void {
  }

  populateData(): void{
    this.frontendservice.currentUser  = this.user.key
    this.frontendservice.populatePatientData(this.user).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message
        this.closeDialog()
      },
      (err) => {
        this.errororconfirmmsg = err
      }
    )
  }

 

  closeDialog(): void{
    this.dialogRef.close({
      event: 'close', data:{info: this.user}
    })

  }

}
