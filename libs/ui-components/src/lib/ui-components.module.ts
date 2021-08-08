import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DraggableFileComponent } from './draggable-file/draggable-file.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab-group/tab/tab.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  AccordionComponent,
  AccordionItemComponent,
  ButtonComponent,
  DraggableFileComponent,
  TabGroupComponent,
  TabComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class UiComponentsModule { }
