import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FrontEndServiceService } from '../../frontEnd/front-end-service.service';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-patient-shared',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(10px)'
        }),
        animate('400ms', style({opacity:0.4,  transform : 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateY(10px)'}))
      ])
    ])
  ]
})
export class PatientComponent implements OnInit {
  constructor(private frontservice: FrontEndServiceService) { }
  errormsg: string = ''
  patient  = {
    key : ''

  }

  @Output() routeEvent = new EventEmitter<boolean>();
  // @Output() userEvent = new EventEmitter<any>();

  ngOnInit(): void {

  }

 
  getPatient(): void{
    this.frontservice.getPatient(this.patient.key).subscribe(
      (res) => {
        if(!!res.user){
          this.routeEvent.emit(true)
          // this.userEvent.emit(this.patient.key)
          this.frontservice.currentUser = this.patient.key
          this.setLoggedInUser()
        }else{
          this.errormsg = res.message
          this.routeEvent.emit(false)
        }
      },
      (err) => this.errormsg = err
    )
    
  }

  setLoggedInUser():void{
    // var userInfo = JSON.parse(localStorage.getItem('currentUser')!);
    localStorage.setItem('currentUser', JSON.stringify(this.patient.key))
    this.frontservice.loggedInPatient = this.patient.key

  }

}
