import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  providers: [HttpClient]
})
export class HomeModule {}
