import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  public isMobile: boolean;
  public isTablet: boolean;
  public isDesktop: boolean;
  public screenWidth: string;

  constructor() {
    this.checkWidth();
   }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.screenWidth = 'sm';
    } else if (width > 768 && width <= 992) {
      this.screenWidth = 'md';
    } else {
      this.screenWidth = 'lg';
    }
    this.isMobile = this.screenWidth === 'sm';
    this.isTablet = this.screenWidth === 'md';
    this.isDesktop = this.screenWidth === 'lg';
  }

}
