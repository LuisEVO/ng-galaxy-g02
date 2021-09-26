import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { AuthCommonModule } from './common/common.module';


@NgModule({
  declarations: [
    SignInView
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonModule
  ]
})
export class AuthModule { }
