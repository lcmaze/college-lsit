import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  mainUrl: string = environment.apiUrl;

  constructor(private mainData: MainService) { }

  ngOnInit() {
    this.filterCollege('');
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

}
