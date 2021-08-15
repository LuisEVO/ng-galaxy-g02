import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCanActivateGuard } from '../../common/guards/app-can-activate.guard';
import { AppCanDeactivateGuard } from '../../common/guards/app-can-deactivate.guard';
import { ResolverDataResolver } from '../../common/resolvers/resolver-data.resolver';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';
import { WorkshopsView } from './views/workshops/workshops.view';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsView
  },
  {
    path: 'nuevo',
    component: WorkshopCreateView,
    canActivate: [AppCanActivateGuard],
    canDeactivate: [AppCanDeactivateGuard]
  },
  {
    path: ':workshopId',
    component: WorkshopDetailView,
    resolve: {
      workshop: ResolverDataResolver 
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
