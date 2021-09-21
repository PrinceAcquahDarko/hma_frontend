import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image': 'https://image.shutterstock.com/image-photo/black-nurse-portrait-260nw-232644115.jpg'}, 
    {'image': '  https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];

}
