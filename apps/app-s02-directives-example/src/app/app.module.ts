import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpotsComponent } from './components/spots/spots.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotsComponent,
    ProductGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
