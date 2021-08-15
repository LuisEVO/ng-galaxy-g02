import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeView } from './views/home/home.view';
import { ContactView } from './views/contact/contact.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { UiComponentsModule } from 'ui-components';

@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    ContactView,
    NotFoundView,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
