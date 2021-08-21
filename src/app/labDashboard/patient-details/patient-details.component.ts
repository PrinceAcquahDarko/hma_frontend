import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientInfoComponent } from '../patient-info/patient-info.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  info: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  populateInfo(): void{
    const dialogRef = this.dialog.open(PatientInfoComponent, {
      width: '50%',
      height: '70%',
      // disableClose: true
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result.data.info){
        this.info = result.data.info
    }
  
    });
  }

}
