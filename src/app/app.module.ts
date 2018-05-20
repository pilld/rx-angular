import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './main/banner/banner.component';
import { NavComponent } from './main/nav/nav.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { PanelsComponent } from './main/panels/panels.component';
import { NgComponent } from './main/ng/ng.component';
import { FooterComponent } from './main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    NavComponent,
    CarouselComponent,
    PanelsComponent,
    NgComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
