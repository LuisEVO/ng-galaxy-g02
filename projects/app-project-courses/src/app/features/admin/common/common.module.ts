import { NgModule } from '@angular/core';
import { AdminComponentsModule } from './components/components.module';
import { AdminMaterialModule } from './material/material.module';
import { AdminStatesModule } from './states/states.module';

@NgModule({
  exports: [
    AdminComponentsModule,
    AdminStatesModule
  ]
})
export class AdminCommonModule { }
