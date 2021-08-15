import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectView } from './views/subject/subject.view';
import { SubjectTemaryView } from './views/subject/subject-temary/subject-temary.view';
import { SubjectInfoView } from './views/subject/subject-info/subject-info.view';


@NgModule({
  declarations: [
    SubjectView,
    SubjectTemaryView,
    SubjectInfoView
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
