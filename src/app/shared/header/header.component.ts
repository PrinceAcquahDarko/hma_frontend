import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullname = JSON.parse(localStorage.getItem('fullname')!);

  constructor() { }

  ngOnInit(): void {
  }

}
