import { ProductService } from 'src/services/product.service';
import { EmitterService } from './../../services/emitter.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  showIntro = false;
  loading = true;
  myCount: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    // this.emitterService.data.subscribe(success => {
    //   this.myCount = <any>success;
    //   console.log('MyCount:' + this.myCount);
    // });

    this.router.events.subscribe(success => {
      const val = success['url'];

      if (val && val.includes('home')) {
        this.showIntro = true;
        this.ngOnInit();
        this.loading = false;
      } else if (val && val == '/') {
        this.showIntro = true;
        this.ngOnInit();
        this.loading = false;

      } else {
        this.showIntro = false;
        this.loading = false;
      }

    });

  }

  ngOnInit() {


    const routeData = this.router.url;
    console.log(routeData);
    if (routeData.includes('home')) {
      this.showIntro = true
    } else if (routeData == '/') {
      this.showIntro = true;
    }
  }

}
