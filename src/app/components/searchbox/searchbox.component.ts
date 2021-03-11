import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  value : boolean = false;

  constructor(private mainData: MainService) { }

  ngOnInit() {
  }

  colleges: any;
  search(name: any){
    if(name.target.value.length > 3){
      this.mainData.get(`api/get-college-search?name=${name.target.value}`).subscribe((data) => {
        this.colleges = data;
      })
    }
    if(name.target.value === ""){
      this.colleges = null;
    }
  }

}
