import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsRoutingModule } from './workshops-routing.module';
import { UiComponentsModule } from 'ui-components';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';
import { WorshopsServicesModule } from './services/services.module';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';


@NgModule({
  declarations: [
    WorkshopsView,
    WorkshopDetailView,
    WorkshopCreateView,
    WorkshopUpdateView
  ],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    UiComponentsModule,
    WorshopsServicesModule
  ]
})
export class WorkshopsModule { }
