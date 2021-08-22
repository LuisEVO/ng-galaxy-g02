import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'talleres',
    pathMatch: 'full'
  },
  { path: 'talleres', loadChildren: () => import('./features/workshops/workshops.module').then(m => m.WorkshopsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
