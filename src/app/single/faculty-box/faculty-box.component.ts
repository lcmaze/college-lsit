import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-faculty-box',
  templateUrl: './faculty-box.component.html',
  styleUrls: ['./faculty-box.component.scss']
})
export class FacultyBoxComponent implements OnInit {

  @Input('id') id: any;

  constructor(private mainData: MainService) { }

  ngOnInit() {
    this.getFaculty();
  }

  faculty: any;
  getFaculty() {
    this.mainData.getCache(`api/get-college-faculty?id=${this.id}`).subscribe((data) => {
      this.faculty = data
    })
  }

}
