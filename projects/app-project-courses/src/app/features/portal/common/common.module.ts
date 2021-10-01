import { NgModule } from '@angular/core';
import { PortalComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    PortalComponentsModule
  ]
})
export class PortalCommonModule { }
