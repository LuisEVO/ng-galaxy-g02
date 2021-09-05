import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { AppValidators } from '../../common/validators/app-validators';

@Component({
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.scss']
})
export class SignUpView implements OnInit {

  signInForm: FormGroup;

  get emailField(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }

  get passField(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  get confirmPassField(): FormControl {
    return this.signInForm.get('confirmPassword') as FormControl;
  }

  get phonesField(): FormArray {
    return this.signInForm.get('phones') as FormArray;
  }

  get photoField(): FormControl {
    return this.signInForm.get('photo') as FormControl;
  }

  constructor(
    private fb: FormBuilder 
  ) {
    /*
    this.signInForm = new FormGroup({
      email: new FormControl('valor inicial'),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
    */

    this.signInForm = this.fb.group({
      email: [null, [Validators.required, AppValidators.email]],
      password: [null, [AppValidators.range(8, 20)]],
      confirmPassword: null,
      phones: this.fb.array([
        this.phoneControl()
      ]),
      photo: [null, AppValidators.extension('pdf')],
      option: null
    }, {
      validators: [AppValidators.equals('password', 'confirmPassword')]
    })

    /*
    this.emailField.valueChanges
      .pipe(
        filter(value => (value || '').includes('@'))
      )
      .subscribe(console.log);
    */
  }

  phoneControl() {
    return this.fb.control(null, [Validators.min(900000000)])
  }

  addPhone() {
    this.phonesField.push(this.phoneControl())
  }

  removePhone(index: number) {
    this.phonesField.removeAt(index);
  }

  selectFile(e: any) {
    const file = e.target.files[0];
    console.log(file);
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.signInForm);
    if (this.signInForm.valid) {
      // enviar al servidor
    }
  }

}
