import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-placement-box',
  templateUrl: './placement-box.component.html',
  styleUrls: ['./placement-box.component.scss']
})
export class PlacementBoxComponent implements OnInit {

  @Input('id') id: string;

  constructor(private mainData: MainService) { }

  ngOnInit() {
    this.getPlacements();
  }

  placements: any;
  getPlacements() {
    this.mainData.getCache(`api/get-college-placements?id=${this.id}`).subscribe((data) => {
      this.placements = data;
    })
  }

}