import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  breakpoint: number;
  isMobile: boolean;

  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 1000 ? 1 : 3;
    this.isMobile = this.breakpoint === 1;
  }

  onResize(event) {
    console.log(this.isMobile)
    this.breakpoint = event.target.innerWidth <= 1000 ? 1 : 3;
    this.isMobile = this.breakpoint === 1;
  }
}
