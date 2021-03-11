import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor(private router: Router,private activeRoute: ActivatedRoute, private mainData: MainService,) {
  }

  readMoreReviewId: any;

  tabIndex: any = 0;
  view: any = 'Info';
  id: any;
  section: string;
  siteUrl: any = environment.apiUrl;

  referrer: any;

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.section = params['section'];
      if(this.section === 'admission'){
        this.view = 'Admissions';
        this.tabIndex = 1;
      }
      if(this.section === 'courses'){
        this.tabIndex = 2;
        this.view = 'Courses';
      }
      if(this.section === 'reviews'){
        this.view = 'Reviews';
        this.tabIndex = 2;
      }
      // console.log(this.id);
      this.getCollege();
      this.getSideBarDetails();
    });
  }


  @ViewChild('apply_el', {static: false}) apply_el: ElementRef<HTMLElement>;

  clickApplyBtn(ev){
    if(ev){
      // let el: HTMLElement = this.apply_el.nativeElement;
      // el.click();
    }
  }

  changeTab(ev: any) {
    window.scrollTo(0,0);
    if(ev){
      this.tabIndex = ev;
    }
  }

  similar_colleges: any;
  faculty_details: any;
  reviews: any;
  courses: any;
  facilities: any;
  getSideBarDetails(){
    this.mainData.getCache(`api/get-college-sidebar?id=${this.id}`).subscribe(data => {
      this.similar_colleges = data[Object.keys(data)[4]];
      // console.log(this.similar_colleges)
      this.faculty_details = data[Object.keys(data)[0]];
      this.reviews = data[Object.keys(data)[2]];
      this.courses = data[Object.keys(data)[3]];
      this.facilities = data[Object.keys(data)[1]];
    })
  }

  mainUrl: string = environment.apiUrl;
  college: any;
  getCollege() {
    this.mainData.getCache(`api/get-college-full?id=${this.id}`).subscribe(data => {
      this.college = data;
    })
  }

  showFullReview(ev){
    window.scrollTo(0, 0);
    if(ev){
      this.readMoreReviewId = ev;
      this.view = "ReviewFull";
    }
  }
  
  toReviews(ev){
    if(ev === true){
      this.tabIndex = 3;
      this.view = "Reviews";
    }
  }

  changeView(view){
    this.view = view.tab.textLabel;
  }

}
