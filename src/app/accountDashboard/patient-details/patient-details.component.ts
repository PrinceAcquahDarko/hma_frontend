import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';
import { PatientInfoComponent } from '../patient-info/patient-info.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  user: any

  constructor(public dialog: MatDialog, private frontendService: FrontEndServiceService) { }

  ngOnInit(): void {
    this.getUser()
  }

  populateInfo(): void{
    const dialogRef = this.dialog.open(PatientInfoComponent, {
      width: '50%',
      height: '50%',
      // disableClose: true
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result.data.info){
        this.user = result.data.info
      }

    });
    }

    getUser(): void{
      this.frontendService.getPatient().subscribe(
        res => {
          this.user = res.user
        }
      )
    }

}


