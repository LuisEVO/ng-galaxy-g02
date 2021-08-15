import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';
import { UiComponentsModule } from 'ui-components';


@NgModule({
  declarations: [
    WorkshopsView,
    WorkshopCreateView,
    WorkshopDetailView
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    UiComponentsModule
  ]
})
export class WorkshopModule { }
