import { NavbarService } from './../services/navbar.service';
import { EmitterService } from './../services/emitter.service';
import { BroadcastService } from './../services/broadcast.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BroadcastService, EmitterService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
