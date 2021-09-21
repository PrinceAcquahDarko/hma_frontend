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
    {'image': 'https://us.123rf.com/450wm/rido/rido1704/rido170400095/76465313-portrait-of-smiling-doctor-with-stethoscope-around-his-neck-at-medical-clinic-happy-smiling-senior-d.jpg?ver=6'}, 
    {'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeBOrQ94I5S7j4jvfMpx_qGs2FYOAwa8g4g&usqp=CAU'},
    {'image': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yourfreecareertest.com%2Fcollege-prep%2Fhow-to-become-a-doctor%2F&psig=AOvVaw3UByUvuZ1BZdPhDdHuX4sx&ust=1632247329821000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIC_3cX9jvMCFQAAAAAdAAAAABAO'}
  ];

}
