import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCanActivateChildGuard } from '../../common/guards/app-can-activate-child.guard';
import { SubjectInfoView } from './views/subject/subject-info/subject-info.view';
import { SubjectTemaryView } from './views/subject/subject-temary/subject-temary.view';
import { SubjectView } from './views/subject/subject.view';

const routes: Routes = [
  {
    path: '',
    component: SubjectView,
    canActivateChild: [ AppCanActivateChildGuard ],
    children: [
      {
        path: 'descripcion',
        component: SubjectInfoView
      },
      {
        path: 'temario',
        component: SubjectTemaryView
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
