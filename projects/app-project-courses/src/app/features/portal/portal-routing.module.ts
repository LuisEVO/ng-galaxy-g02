import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { CourseDetailView } from './views/course-detail/course-detail.view';
import { CoursesView } from './views/courses/courses.view';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'cursos',
        component: CoursesView
      },
      {
        path: 'cursos/:id',
        component: CourseDetailView
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
