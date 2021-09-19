import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    InputFileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    InputFileComponent
  ]
})
export class AppInputFileModule { }
