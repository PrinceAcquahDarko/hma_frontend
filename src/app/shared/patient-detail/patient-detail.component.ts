import { Component, Input, OnInit } from '@angular/core';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-patient-detail-shared',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
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
export class PatientDetailComponent implements OnInit {
  constructor(private frontendService: FrontEndServiceService) { }
  
  user: any;
  @Input() users: any;
  // huser = this.users
  
  ngOnInit(): void {
    this.getUser();
    this.OnRepeat();
  }

  getUser(): void{
    this.frontendService.getPatient().subscribe(
      res => {
        this.user = res.user
      }
    )
  }

  OnRepeat(): void{
    setInterval(()=>{
      if(this.users){
        this.getUser();
        this.users = '';
      }
    },1000)
  
  }



 

}
