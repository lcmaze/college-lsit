import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-foot',
  templateUrl: './testimonial-foot.component.html',
  styleUrls: ['./testimonial-foot.component.scss']
})
export class TestimonialFootComponent implements OnInit {

  detail = [
    { name : "James C.K", text : "Feels good to get admission for my son in this devastating COVID-19 situation, Thanks to Collegelist.in", image : 'assets/images/bg.jpg', designation : 'NRI from Bahrain'},            
    { name : "Charles America", text : "Precise and informational contents only. Details of about all colleges in India are present. Keep it Up", image : 'assets/images/bg.jpg', designation : 'NRI from America'},            
]
  options={items: 1, dots: false, nav: false, loop: true,margin:20, autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true,  animateOut: 'fadeOut',
  animateIn: 'fadeIn', slideSpeed: 2000};

  constructor() { }

  ngOnInit() {
  }

}
