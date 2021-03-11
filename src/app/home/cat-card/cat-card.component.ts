import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input('name') name: string;
  @Input('image') image: string;

  constructor() { }

  ngOnInit() {
  }

}
