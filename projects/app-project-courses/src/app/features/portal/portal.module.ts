import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { CoursesView } from './views/courses/courses.view';
import { CourseDetailView } from './views/course-detail/course-detail.view';
import { PortalCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    PortalComponent,
    CoursesView,
    CourseDetailView
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonModule
  ]
})
export class PortalModule { }
