import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    const value = control.value ?? '';
    const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)

    return isValid ? null : { emailFormat: true };
  }

  static range(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      const value = control.value || '';

      const isValid = value.length > min && value.length <= max;

      return isValid ? null : { range: `Los caracteres deben estar entre ${min} y ${max}` };
    }
  }

  static equals(fieldName1: string, fieldName2: string) {
  
    return (form: FormGroup): ValidationErrors | null => {

      const field1 = form.get(fieldName1)?.value || '';
      const field2 = form.get(fieldName2)?.value || '';

      const isValid = field1 === field2;

      if (!isValid) {
        form.get(fieldName2)?.setErrors({
          equals: true
        })
      }

      return null;
    }
  }

  static extension(ext: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      const value = control.value as File | null;

      if (value) {
        const parts = value.name.split('.');
        const fileExtension = parts[parts.length - 1];
        const isValid = fileExtension === ext;


        return isValid ? null : { extension: `La extensión debe ser ${ext}` };
      }

      return null
    }
  }
  
}