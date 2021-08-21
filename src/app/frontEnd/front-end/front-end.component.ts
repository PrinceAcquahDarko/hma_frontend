import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css'],
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
export class FrontEndComponent implements OnInit {
  // selectedDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
