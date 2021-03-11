import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input('college') c: any;
  @Input('similar') similar: any;

  mainUrl: string = environment.apiUrl;

  constructor() { }

  ngOnInit() {
    // console.log(this.similar)
  }

}
