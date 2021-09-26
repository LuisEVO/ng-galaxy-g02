import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMaterialModule } from '../material/material.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    AuthMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthMaterialModule,
    SignInFormComponent
  ]
})
export class AuthComponentsModule { }
