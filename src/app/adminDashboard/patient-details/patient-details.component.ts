import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientPopulateComponent } from '../patient-populate/patient-populate.component';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  user: any
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.user = this.data.patient
  }

  populateInfo(): void{
    const dialogRef = this.dialog.open(PatientPopulateComponent, {
      width: '70%',
      height: '70%',
      data: {patient: this.data.patient}
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result.data.info){
        this.user = result.data.info;
      }

    });
  }

}
