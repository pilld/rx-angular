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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './main/my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    NavComponent,
    CarouselComponent,
    PanelsComponent,
    NgComponent,
    FooterComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
