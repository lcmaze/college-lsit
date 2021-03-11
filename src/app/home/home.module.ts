import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { OwlModule } from 'ngx-owl-carousel';
import { CategoriesComponent } from './categories/categories.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { FeaturedComponent } from './featured/featured.component';


@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CatCardComponent, FeaturedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    OwlModule
  ]
})
export class HomeModule { }
