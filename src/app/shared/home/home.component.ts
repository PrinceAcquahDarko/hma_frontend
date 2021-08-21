import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-home-shared',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  fullname = JSON.parse(localStorage.getItem('fullname')!);

  constructor() { }

  ngOnInit(): void {
  }

}
