import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CourseCreateView } from './views/course-create/course-create.view';
import { CourseUpdateView } from './views/course-update/course-update.view';
import { CoursesListView } from './views/courses-list/courses-list.view';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'cursos',
        component: CoursesListView
      },
      {
        path: 'cursos/nuevo',
        component: CourseCreateView
      },
      {
        path: 'cursos/:courseId/editar',
        component: CourseUpdateView
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
