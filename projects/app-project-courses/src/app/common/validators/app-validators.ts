import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static extensions(exts: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      const value = control.value as File | null;

      if (value) {
        const parts = value.name.split('.');
        const fileExtension = parts[parts.length - 1];
        const isValid = exts.includes(fileExtension);


        return isValid ? null : { extensions: `Formatos validos ${exts.join(', ')}` };
      }

      return null
    }
  }
}