import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    const value = control.value ?? '';
    const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)

    return isValid ? null : { emailFormat: true };
  }
  
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