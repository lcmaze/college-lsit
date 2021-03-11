import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ScrollanimComponent } from './scrollanim/scrollanim.component';
import { CollegeCardComponent } from './college-card/college-card.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { TestimonialFootComponent } from './testimonial-foot/testimonial-foot.component';
import { RouterModule } from '@angular/router';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { FilterPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [NavComponent, ScrollanimComponent, CollegeCardComponent, FooterComponent, TestimonialFootComponent, SearchboxComponent, ApplynowComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule,
    FormsModule
  ],
  exports: [NavComponent,ScrollanimComponent,CollegeCardComponent, FooterComponent, TestimonialFootComponent, SearchboxComponent, ApplynowComponent, FilterPipe]
})
export class ComponentsModule { }
