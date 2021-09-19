import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { AdminMaterialModule } from '../material/material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseConfirmRemoveComponent } from './course-confirm-remove/course-confirm-remove.component';
import { CourseFilesFormComponent } from './course-files-form/course-files-form.component';
import { AppInputFileModule } from 'projects/app-project-courses/src/app/common/components/input-file/input-file.module';

@NgModule({
  declarations: [
    CourseFormComponent,
    CourseConfirmRemoveComponent,
    CourseFilesFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminMaterialModule,
    NgxMaskModule.forRoot(),
    AppInputFileModule
  ],
  exports: [
    CourseFormComponent,
    CourseFilesFormComponent,
    AdminMaterialModule
  ]
})
export class AdminComponentsModule { }
