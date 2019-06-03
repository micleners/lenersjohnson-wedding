import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
// import { DirectivesModule } from './directives/directives.module';
// import { Material2Module } from './material2.module';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';
import { RegistriesComponent } from './registries/registries.component';
import { VenueComponent } from './venue/venue.component';
import { HeroComponent } from './hero/hero.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// import { AboutComponent } from './about/about.component';
// import { HeadingComponent } from './heading/heading.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { BlogComponent } from './blog/blog.component';
// import { ContactComponent } from './contact/contact.component';
// import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelCardComponent,
    RegistriesComponent,
    VenueComponent,
    HeroComponent,
    // PortfolioComponent,
    // AboutComponent,
    // HeadingComponent,
    // PricingComponent,
    // BlogComponent,
    // ContactComponent,
    // ContactDialogComponent
  ],

  imports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Material2Module,
    // DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  // entryComponents: [ ContactDialogComponent ],
  bootstrap: [AppComponent],
})
export class AppModule {}
