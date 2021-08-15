import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCanActivateGuard } from './common/guards/app-can-activate.guard';
import { AppCanLoadGuard } from './common/guards/app-can-load.guard';
import { ContactView } from './views/contact/contact.view';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';

const routes: Routes = [
  // COMPONENTE POR DEFECTO EN LA RUTA BASE
  {
    path: '',
    component: HomeView
  },
  // RUTA POR DEFECTO REDIRIGE A OTRA
  /*
  {
    path: '',
    redirectTo: 'inicio',
    // REQUERIDO PARA REDIRIGIR EL PATH VACIO
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeView
  },
  */
  {
    path: 'contactanos',
    component: ContactView
  },
  {
    path: 'talleres',
    canLoad: [AppCanLoadGuard],
    canActivate: [AppCanActivateGuard],
    loadChildren: () => import('./features/workshop/workshop.module').then(m => m.WorkshopModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./features/subject/subject.module').then(m => m.SubjectModule)
  },
  /* ASIGNAR UN COMPONENTE A UNA RUTA QUE NO EXISTA
  {
    path: '**',
    component: NotFoundView
  },
  */
  /* REDIRIGE UNA QUE NO EXISTE */
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
