import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from "@angular/animations"


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
   animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(10px)'
        }),
        animate('500ms', style({opacity:0.4,  transform : 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0, transform: 'translateY(10px)'}))
      ])
    ])

    
    // trigger('enter', [
    //   transition('* => *', [
    //     style({
    //       opacity: 0, transform: 'translateX(100%)'
    //     }),
    //     animate('500ms', style({opacity:0.4,  transform : 'translateX(-100%)'}))
    //   ]),
    //   transition('* => void', [
    //     animate('500ms', style({opacity: 0, transform: 'translateX(100%)'}))
    //   ])
    // ])
  ]
})
export class HelloComponent implements OnInit {
  selectedValue = 'select doc'
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element: any): void{
    $element.scrollIntoView({behaviour: 'smooth', block: 'start', inline: 'nearest'})
  }

}
