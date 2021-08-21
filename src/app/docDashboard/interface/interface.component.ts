import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FrontEndServiceService } from 'src/app/frontEnd/front-end-service.service';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(10px)'
        }),
        animate('1000ms', style({opacity:0.4,  transform : 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateY(10px)'}))
      ])
    ])
  ]
})
export class InterfaceComponent implements OnInit {
  user: any;
  private _currentUser:string = ''

get currentUser(): string{
  return this._currentUser
}

set currentUser(value: string){
  let initailValue = this.currentUser
  this._currentUser = value;

  if(initailValue !== value){
    this.frontendservice.getLoggedInPatient(value).pipe(
      map(x => x.user[0])
    ).subscribe(
      res => {
          this.user = res
      }
    )
  }
}
  constructor(private frontendservice: FrontEndServiceService) { }

  ngOnInit(): void {
    this.onRepeat()
  }

  getCurrentUser():void{
    let userInfo = this.frontendservice.loggedInPatient  || JSON.parse(localStorage.getItem('currentUser')!);
    if(userInfo){
      this.currentUser = userInfo
    }

  }

  onRepeat(): void{
    setInterval(()=>{
      this.getCurrentUser()
    },2000)
  }

}
