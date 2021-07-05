import { Component, OnInit } from '@angular/core';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient-detail-shared',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  constructor(private frontendService: FrontEndServiceService) { }
  
  user : any


  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    console.log(this.frontendService.currentUser)
    this.frontendService.getPatient().subscribe(
      res => {this.user = res.user
      console.log(res)}
    )
  }

 

}
