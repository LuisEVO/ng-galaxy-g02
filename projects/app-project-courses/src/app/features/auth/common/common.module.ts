import { NgModule } from '@angular/core';
import { AuthComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    AuthComponentsModule
  ]
})
export class AuthCommonModule { }
