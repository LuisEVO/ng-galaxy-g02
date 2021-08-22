import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { WorkshopsView } from './views/workshops/workshops.view';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsView
  },
  {
    path: 'nuevo',
    component: WorkshopCreateView
  },
  {
    path: 'editar/:id',
    component: WorkshopUpdateView
  },
  {
    path: ':id',
    component: WorkshopDetailView
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopsRoutingModule { }
