import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-course-box',
  templateUrl: './course-box.component.html',
  styleUrls: ['./course-box.component.scss']
})
export class CourseBoxComponent implements OnInit {

  @Input('id') id: any;

  constructor(private mainData: MainService) { }

  ngOnInit() {
    this.getCourses();
  }

  courses: any;
  getCourses() {
    this.mainData.getCache(`api/get-college-courses?id=${this.id}`).subscribe((data) => {
      this.courses = data;
    })
  }

}
