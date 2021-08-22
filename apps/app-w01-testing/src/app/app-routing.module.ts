import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';

const routes: Routes = [
  {
    path: '',
    component: HomeView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
