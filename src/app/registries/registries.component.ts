import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-registries',
  templateUrl: './registries.component.html',
  styleUrls: ['./registries.component.css'],
})
export class RegistriesComponent implements OnInit {
  breakpoint: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  public registries = [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/wedding/share/lenersjohnson',
      imageUrl: '/assets/amazon-logo.png',
    },
    {
      name: 'Amazon',
      url: 'https://info.ikea-usa.com/giftregistry/en-us/registry/3ecaa898-e6cd-40cc-a2b0-2b684e7efb7e',
      imageUrl: '/assets/ikea-logo.png',
    },
  ];

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
    this.isMobile = this.responsiveService.isMobile;
    this.isTablet = this.responsiveService.isTablet;
    this.isDesktop = this.responsiveService.isDesktop;
    this.breakpoint = this.isMobile ? 1 : 2;
  }
}
