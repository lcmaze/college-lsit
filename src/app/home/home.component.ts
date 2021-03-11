import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images =['assets/images/bg2.jpg','assets/images/bg.jpg','assets/images/bg2.jpg', 'assets/images/bg.jpg'];
  options={items: 1, dots: false, nav: false, loop: true, autoplay:true, autoplayTimeout:5000};

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

}
