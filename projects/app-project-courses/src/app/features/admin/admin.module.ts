import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { CoursesListView } from './views/courses-list/courses-list.view';
import { CourseCreateView } from './views/course-create/course-create.view';
import { CourseUpdateView } from './views/course-update/course-update.view';
import { AdminCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AdminComponent,
    CoursesListView,
    CourseCreateView,
    CourseUpdateView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonModule,
  ]
})
export class AdminModule { }
