import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInView } from './views/sign-in/sign-in.view';

const routes: Routes = [
  { path: 'login', component: SignInView }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
