import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventInputFile } from '../../types/event-input-file.type';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFileComponent,
      multi: true
    }
  ]
})
export class InputFileComponent implements ControlValueAccessor  {
  @Input() accept?: string;
  @Input() url?: string;
  @Input() label = 'Seleccione un archivo';

  file?: File;
  onChange!: (file: File) => void;
  onTouch!: () => void;

  get labelDisplay() {
    return this.file ? this.file.name : this.label;
  }

  setFile(e: Event) {
    this.file = (e as EventInputFile).target.files[0];
    this.onChange(this.file);
    this.onTouch();
  }

  writeValue(file: File): void {
    this.file = file;
  }

  registerOnChange(fn: (file: File) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

}
