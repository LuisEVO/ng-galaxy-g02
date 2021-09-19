import { NgModule } from '@angular/core';
import { AdminComponentsModule } from './components/components.module';
import { AdminMaterialModule } from './material/material.module';

@NgModule({
  exports: [
    AdminComponentsModule
  ]
})
export class AdminCommonModule { }
