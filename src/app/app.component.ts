import { EmitterService } from './../services/emitter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCount: any = 0;

  title = 'chillman';
  constructor(private emitterService: EmitterService) {
    this.emitterService.data.subscribe(success => {
      this.myCount = <any>success;
      console.log('MyCount:' + this.myCount);
    });
  }
}
