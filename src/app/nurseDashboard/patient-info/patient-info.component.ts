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
  constructor(private frontendservice: FrontEndServiceService, public dialogRef: MatDialogRef<PatientInfoComponent>) { }
  
  ngOnInit(): void {
  }

  populateData(){
    this.frontendservice.populatePatientData(this.appearance).subscribe(
      (res) => {
        this.errororconfirmmsg = res.message;
        this.closeDialog();
      },
      (err) => this.errororconfirmmsg = err
    )
  }


  closeDialog(): void{
    this.dialogRef.close({
      event: 'close'
    })

    this.frontendservice.data = this.appearance
  }
}
