import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FrontEndServiceService } from '../../frontEnd/front-end-service.service';

@Component({
  selector: 'app-patient-shared',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private frontservice: FrontEndServiceService) { }
  errormsg: string = ''
  patient  = {
    key : ''

  }

  @Output() routeEvent = new EventEmitter<boolean>();

  ngOnInit(): void {

  }

 
  getPatient(): void{
    this.frontservice.getPatient(this.patient.key).subscribe(
      (res) => {
        if(!!res.user){
          this.routeEvent.emit(true)
          this.frontservice.currentUser = this.patient.key
          //we pass a key to your parent for it to redirect
        }else{
          this.errormsg = res.message
          this.routeEvent.emit(false)
        }
      },
      (err) => this.errormsg = err
    )
    
  }

}
