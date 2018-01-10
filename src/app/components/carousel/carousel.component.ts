import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider').slider();
  }

}
