import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { ComponentsModule } from '../components/components.module';
import { HeadComponent } from './head/head.component';
import { DetailsComponent } from './details/details.component';
import { CourseBoxComponent } from './course-box/course-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { GalleryBoxComponent } from './gallery-box/gallery-box.component';
import { FacultyBoxComponent } from './faculty-box/faculty-box.component';
import { PlacementBoxComponent } from './placement-box/placement-box.component';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [SingleComponent, HeadComponent, DetailsComponent, CourseBoxComponent, InfoBoxComponent, GalleryBoxComponent, FacultyBoxComponent, PlacementBoxComponent],
  imports: [
    CommonModule,
    SingleRoutingModule,
    ComponentsModule,
    LightboxModule
  ]
})
export class SingleModule { }
