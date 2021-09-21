import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from "@angular/animations"
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720
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
 yes = false;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router ) { }



  ngOnInit(): void {

    this.breakpointObserver.observe([
      `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
    ]).subscribe(
      (state: BreakpointState) =>  {
        this.yes = state.matches
      }
    )
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate([`/home`])
  }




}
