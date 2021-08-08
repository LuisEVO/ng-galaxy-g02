import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DraggableFileComponent } from './components/draggable-file/draggable-file.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab-group/tab/tab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DraggableFileComponent,
    TabGroupComponent,
    TabComponent,
    AccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
