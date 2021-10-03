import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { CoursesView } from './views/courses/courses.view';
import { CourseDetailView } from './views/course-detail/course-detail.view';
import { PortalCommonModule } from './common/common.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PortalComponent,
    CoursesView,
    CourseDetailView
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonModule,
    InfiniteScrollModule
  ]
})
export class PortalModule { }
