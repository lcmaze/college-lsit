import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Input('college') c: any;

  mainUrl: string = environment.apiUrl;

  constructor() { }

  ngOnInit() {
    // console.log(this.college)
  }

}
