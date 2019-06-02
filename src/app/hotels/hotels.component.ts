import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { ResponsiveService } from '../responsive.service';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  breakpoint: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  hotels: Hotel[];

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 1000 ? 1 : 3;
    this.isMobile = this.breakpoint === 1;
    this.hotels = hotelsDefinedBelow;
  }

  onResize() {
    this.responsiveService.checkWidth();
    this.isMobile = this.responsiveService.isMobile;
    this.isTablet = this.responsiveService.isTablet;
    this.isDesktop = this.responsiveService.isDesktop;
    this.breakpoint = (this.isMobile || this.isTablet) ? 1 : 3;
  }
}

const hotelsDefinedBelow = [
      {
        name: 'Hampton Inn Urbandale',
        description: 'Northwest Des Moines',
        address1: '8811 Plum Dr',
        address2: 'Urbandale, IA',
        phone: '(515) 252-7000',
        // tslint:disable-next-line:max-line-length
        hotelUrl: 'https://hamptoninn3.hilton.com/en/hotels/iowa/hampton-inn-and-suites-des-moines-urbandale-DSMUBHX/index.html?SEO_id=GMB-HP-DSMUBHX',
        // tslint:disable-next-line:max-line-length
        gpsUrl: 'https://www.google.com/maps/place/Hampton+Inn+%26+Suites+Des+Moines%2FUrbandale/@41.6304345,-93.7736847,13z/data=!4m8!1m2!2m1!1sHampton+Inn+%26+Suites+!3m4!1s0x87ee9d8896e3a299:0x8168b3bdbef75c5f!8m2!3d41.6506303!4d-93.7411244',
      },
      {
        name: 'Holiday Inn Jordan Creek',
        description: 'Near Shopping Center',
        address1: '6075 Mills Civic Pkwy',
        address2: 'West Des Moines, IA',
        phone: '(515) 309-3900',
        hotelUrl: 'https://www.ihg.com/holidayinn/hotels/us/en/west-des-moines/dsmwm/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-DSMWM',
        // tslint:disable-next-line:max-line-length
        gpsUrl: 'https://www.google.com/maps/place/Holiday+Inn+%26+Suites+West+Des+Moines-Jordan+Creek/@41.5582561,-93.8024528,15z/data=!4m8!1m2!2m1!1sFairfield+Inn+%26+Suites+by+Marriott+!3m4!1s0x87ec21b62fcbd039:0x742c697ac0a6e294!8m2!3d41.5599597!4d-93.7914889',
      },
      {
        name: 'Holiday Inn Downtown',
        description: 'Downtown Des Moines',
        address1: '333 SW 11th St',
        address2: 'Des Moines, IA',
        phone: '(515) 657-8181',
        hotelUrl: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/des-moines/dsmml/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-DSMML',
        // tslint:disable-next-line:max-line-length
        gpsUrl: 'https://www.google.com/maps/place/Holiday+Inn+Express+%26+Suites+Des+Moines+Downtown/@41.5869737,-93.6408765,14z/data=!4m8!1m2!2m1!1shotel!3m4!1s0x0:0xe474e592d13af6b2!8m2!3d41.5795139!4d-93.6285192',
      },
    ];
