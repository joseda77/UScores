import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var JQuery: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button-collapse').sideNav();
  }

}
