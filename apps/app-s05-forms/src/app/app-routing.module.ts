import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginView } from './views/login/login.view';
import { SignUpView } from './views/sign-up/sign-up.view';
import { UbigeoView } from './views/ubigeo/ubigeo.view';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginView
  },
  {
    path: 'sign-up',
    component: SignUpView
  },
  {
    path: 'ubigeo',
    component: UbigeoView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
