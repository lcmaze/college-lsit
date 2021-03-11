import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';
import { SidefilterComponent } from './sidefilter/sidefilter.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [FilterComponent, HeaderComponent, SidefilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    ComponentsModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class FilterModule { }
