import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.scss']
})
export class ApplynowComponent implements OnInit {

  value : boolean = false;

  constructor(private mainData: MainService) { }

  @ViewChild('cancelBtn', {static: false}) cancelBtn: ElementRef<HTMLElement>;

  ngOnInit() {
    this.getCourses(0);
  }

  submitCollege(form: NgForm){
    if(form.valid){
      this.mainData.post(form.value, 'api/add-student-lead').subscribe(data => {
        if(data){
          form.reset();
          this.cancelBtn.nativeElement.click();
        }
      })
    }
  }

  selectedCollege: any;
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

  courses: any;
  getCourses(id) {
    this.mainData.getCache(`api/get-courses?id=${id}`).subscribe((data) => {
      this.courses = data;
    })
  }

}
