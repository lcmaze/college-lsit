import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery-box',
  templateUrl: './gallery-box.component.html',
  styleUrls: ['./gallery-box.component.scss']
})
export class GalleryBoxComponent implements OnInit {

  pics = [
    {src : "assets/images/bg.jpg", thumb : "assets/images/bg.jpg"},
    {src : "assets/images/bg2.jpg", thumb : "assets/images/bg2.jpg"}
  ];

  constructor(private _lightbox: Lightbox) { 
  }

  ngOnInit() {
  }

  open(index: number): void {
    this._lightbox.open(this.pics, index);
  }
 
  close(): void {
    this._lightbox.close();
  }

}