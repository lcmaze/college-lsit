import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-college-card',
  templateUrl: './college-card.component.html',
  styleUrls: ['./college-card.component.scss']
})

export class CollegeCardComponent implements OnInit {

  constructor() { }
  
  @Input('cover') coverphoto : any;
  @Input('logo') logoimage : any;
  @Input('name') colgname : any;
  @Input('location') locationname : any;
  @Input('rating') rating : any;
  @Input('courses') courses : any;
  @Input('id') id : any;
  @Input('slug') slug : any;
  @Input('alternate') alternate : boolean = false;

  ngOnInit() {
  }

}
