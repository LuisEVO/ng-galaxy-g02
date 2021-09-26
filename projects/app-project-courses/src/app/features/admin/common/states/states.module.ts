import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CoursesAdminState } from './courses.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([
      CoursesAdminState
    ])
  ],
  exports: [
    NgxsModule
  ]
})
export class AdminStatesModule { }
