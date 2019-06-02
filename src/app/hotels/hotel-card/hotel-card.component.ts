import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from 'src/app/responsive.service';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: Hotel;
  breakpoint: number;
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
  }
}
