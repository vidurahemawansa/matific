import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/modals/video/video.component';
import { WhyMatificComponent } from './components/why-matific/why-matific.component';
import { AboutMatificComponent } from './components/about-matific/about-matific.component';
import { SafePipe } from './pipes/safe.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    GalleryComponent,
    VideoComponent,
    WhyMatificComponent,
    AboutMatificComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
