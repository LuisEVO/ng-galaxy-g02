import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputFileComponent implements ControlValueAccessor {
  value?: File;
  isDisabled: boolean = false;
  onChange!: (value: File) => void;
  onTouch!: () => void;
  tmpSrc?: string;

  writeValue(value: File): void {
    this.value = value;
  }
  
  registerOnChange(fn: (value: File) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  selectFile(e: any) {
    const file = e.target.files[0];
    this.onChange(file);
    this.onTouch();

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.tmpSrc = event.target.result;
    };
  
    reader.readAsDataURL(file);
  }

}
