import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalMaterialModule } from '../material/material.module';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseItemSkeletonComponent } from './course-item-skeleton/course-item-skeleton.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDetailSkeletonComponent } from './course-detail-skeleton/course-detail-skeleton.component';

@NgModule({
  declarations: [
    CourseItemComponent,
    CourseItemSkeletonComponent,
    CourseDetailComponent,
    CourseDetailSkeletonComponent
  ],
  imports: [
    CommonModule,
    PortalMaterialModule
  ],
  exports: [
    PortalMaterialModule,
    CourseItemComponent,
    CourseItemSkeletonComponent,
    CourseDetailComponent,
    CourseDetailSkeletonComponent
  ]
})
export class PortalComponentsModule { }
