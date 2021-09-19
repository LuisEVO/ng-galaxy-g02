import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { AdminMaterialModule } from '../material/material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminMaterialModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    CourseFormComponent,
    AdminMaterialModule
  ]
})
export class AdminComponentsModule { }
