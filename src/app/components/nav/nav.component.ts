import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $(".navbar").addClass("nav-green");
      } else {
          $(".navbar").removeClass("nav-green");
      }
    });

  }

}
