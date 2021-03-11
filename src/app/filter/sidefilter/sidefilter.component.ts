import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidefilter',
  templateUrl: './sidefilter.component.html',
  styleUrls: ['./sidefilter.component.scss']
})
export class SidefilterComponent implements OnInit {

  @Output('filter') filterColleges = new EventEmitter();
  @Output('apply') applyColleges = new EventEmitter();

  searchState: string; searchCity: string; searchCategory: string; searchCourses: string; searchSpecialisation: string; searchTypes: string; approvalSearch: string;
  state_filter_selected: any;city_filter_selected: any;category_filter_selected: any;courses_filter_selected: any;specialisation_filter_selected: any;
  types_filter_selected: any;fees_filter_selected: any;approvals_filter_selected: any;
  constructor(private data: MainService) { }

  applyFilter(){
    this.applyColleges.emit(true);
  }

  ngOnInit() {
    this.getStates();
    this.getCategory();
    this.getTypes();
    this.getApprovals();
    this.getCourses(0);
    this.getSpecialisations(0);
    this.getLinkExternal();
  }
  getLinkExternal(){
    let filter = this.data.filterLink;
    if(filter){
      if(filter.type === 'state'){
        this.state_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'city'){
        this.city_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'category'){
        this.category_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'courses'){
        this.courses_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'specialisation'){
        this.specialisation_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'types'){
        this.types_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'fees'){
        this.fees_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
      if(filter.type === 'approvals'){
        this.approvals_filter_selected = filter.filter;
        this.filterColleges.emit(filter.link);
        this.data.filterLink = null;
      }
    }
  }

  average_fees: any = [{min: 0, max: 25000, name: "0 - 25K"},{min: 25000, max: 50000, name: "25K - 50K"},
  {min: 50000, max: 75000, name: "50K - 75K"},{min: 75000, max: 100000, name: "75K - 1L"},{min: 100000, max: 200000, name: "1L - 2L"},{min: 200000, name: "2L & above"}];

  state_filter: any;
  filters(form: NgForm){
    if(form.valid){
      this.getApiLink();
    }
  }

  getApiLink(){
    let state_link: string = "";let city_link: string = "";let category_link: string = "";let courses_link: string = "";let specialisation_link: string = "";
    let types_link: string = "";let fees_link: string = "";let approvals_link: string = "";
    if(this.state_filter_selected){state_link = `&state_id=${this.state_filter_selected.state_id}`;this.getCities(`api/get-cities?id=${this.state_filter_selected.state_id}`)}
    if(this.city_filter_selected){city_link = `&city_id=${this.city_filter_selected.city_id}`;}
    if(this.types_filter_selected){types_link = `&types_id=${this.types_filter_selected.type_id}`;}
    if(this.approvals_filter_selected){approvals_link = `&approvals_id=${this.approvals_filter_selected.approval_id}`;}
    if(this.fees_filter_selected){fees_link = `&fees_min=${this.fees_filter_selected.min}&fees_max=${this.fees_filter_selected.max}`}
    if(this.category_filter_selected){category_link = `&category=${this.category_filter_selected.cat_id}`;this.getCourses(this.category_filter_selected.cat_id)}
    if(this.courses_filter_selected){courses_link = `&courses=${this.courses_filter_selected.course_id}`;this.getSpecialisations(this.courses_filter_selected.course_id)}
    if(this.specialisation_filter_selected){specialisation_link = `&specialisation=${this.specialisation_filter_selected.specialisation_id}`;}
    let full_link = state_link + city_link + category_link + courses_link + specialisation_link + types_link + fees_link + approvals_link;
    this.filterColleges.emit(full_link);
  }

  reset(){
    this.cities = null;
    this.state_filter_selected = null;this.city_filter_selected = null;this.category_filter_selected = null;this.courses_filter_selected = null;this.specialisation_filter_selected = null;
    this.types_filter_selected = null;this.fees_filter_selected = null;this.approvals_filter_selected = null;
    this.getApiLink();
  }

  // get data functions
  states: any;
  getStates() {
    this.data.getCache(`api/get-states`).subscribe((data) => {
      this.states = data;
    })
  }
  cities: any;
  getCities(link: string) {
    this.data.getCache(link).subscribe((data) => {
      this.cities = data;
    })
  }
  category: any;
  getCategory() {
    this.data.getCache(`api/get-courses-category`).subscribe((data) => {
      this.category = data;
    })
  }
  courses: any;
  getCourses(id) {
    this.data.getCache(`api/get-courses?id=${id}`).subscribe((data) => {
      this.courses = data;
    })
  }
  specialisation: any;
  getSpecialisations(id) {
    this.data.getCache(`api/get-specialisation?id=${id}`).subscribe((data) => {
      this.specialisation = data;
    })
  }
  types: any;
  getTypes() {
    this.data.getCache(`api/get-types`).subscribe((data) => {
      this.types = data;
    })
  }
  approvals: any;
  getApprovals() {
    this.data.getCache(`api/get-approvals`).subscribe((data) => {
      this.approvals = data;
    })
  }

}
