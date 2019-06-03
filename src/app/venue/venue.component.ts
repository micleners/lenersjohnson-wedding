import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  breakpoint: number;
  walnutWoodsImage: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
    this.isMobile = this.responsiveService.isMobile;
    this.isTablet = this.responsiveService.isTablet;
    this.isDesktop = this.responsiveService.isDesktop;
    this.breakpoint = this.isMobile ? 1 : 3;
    this.walnutWoodsImage = this.isMobile ? 1 : 2;
  }

}
