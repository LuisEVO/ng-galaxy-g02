import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PathLogosPipe } from './pipes/path-logos.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    PathLogosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
