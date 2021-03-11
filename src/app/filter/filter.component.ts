import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainService } from '../services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  value : any = false;
  
  mainUrl: string = environment.apiUrl;

  constructor(private router: Router,private mainData: MainService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    this.value = false;

    this.getFilterAd();
    this.getFeaturedClgs();
    if(!this.mainData.filterLink){
      this.filterCollege('');
    }
  }

  filtertoggle(){
    this.value = !this.value;
  }

  onScroll() {
    this.loadMore();
  }
  loadMore(){
    this.page++;
    this.mainData.get(`api/get-colleges?page=${this.page}&limit=${this.limit}${this.apiLink}&sort=${this.sort}&order=${this.order}`).subscribe((data) => {
      for(const item of data[Object.keys(data)[0]]){
        item.summary = JSON.parse(item.summary);
        this.filterColleges.push(item);
      }
      this.filterColleges = [...this.filterColleges];
    })
  }

  featured: any;
  getFeaturedClgs(){
    this.mainData.getCache(`api/get-featured-clgs`).subscribe(data => {
      this.featured = data;
    })
  }

  filterAd: any;
  getFilterAd(){
    this.mainData.getCache(`api/get-college-ad?id=1`).subscribe(data => {
      this.filterAd = data;
    })
  }

  filter(){
    console.log(this.value)
    this.value = !this.value;
  }

  ratingFlag: boolean = false;
  nameFlag: boolean = false;
  popularityFlag: boolean = false;
  sorting(id){
    if(id === 1){
      this.ratingFlag = !this.ratingFlag;
      if(this.ratingFlag){
        this.sort = 'colleges.rating';this.order = 'desc';
      }
      else{
        this.sort = 'colleges.rating';this.order = 'asc';
      }
    }
    if(id === 2){
      this.nameFlag = !this.nameFlag;
      if(this.nameFlag){
        this.sort = 'colleges.college_name';this.order = 'desc';
      }
      else{
        this.sort = 'colleges.college_name';this.order = 'asc';
      }
    }
    if(id === 3){
      this.popularityFlag = !this.popularityFlag;
      if(this.popularityFlag){
        this.sort = 'colleges.college_id';this.order = 'desc';
      }
      else{
        this.sort = 'colleges.college_id';this.order = 'asc';
      }
    }
    this.filterCollege(this.apiLink);
  }

  filterColleges: any;
  page: any = 1;
  limit: any = 20;
  sort: any = 'colleges.college_id';
  order: any = 'asc';
  apiLink: any;
  filterCollege(ev: any){
    this.apiLink = ev;
    this.page = 1;
    this.mainData.get(`api/get-colleges?page=${this.page}&limit=${this.limit}${this.apiLink}&sort=${this.sort}&order=${this.order}`).subscribe((data) => {
      this.filterColleges = data[Object.keys(data)[0]];
      for(let i = 0; i < this.filterColleges.length; i++) {
        if(this.filterColleges && this.filterColleges[i].summary){
          this.filterColleges[i].summary = JSON.parse(this.filterColleges[i].summary);
        }
      }
    })
  }

  ngOnDestroy(){
    this.filterColleges = null;
    this.filterAd = null;
    this.featured = null;
  }

}
