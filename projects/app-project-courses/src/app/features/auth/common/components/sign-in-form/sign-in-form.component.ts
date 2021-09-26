import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from 'projects/app-project-courses/src/app/common/validators/app-validators';
import { SignInForm } from '../../../../../common/interfaces/sign-in-form.interface';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  showPassword = false;
  form: FormGroup;
  @Output() signIn: EventEmitter<SignInForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: [null, [Validators.required, AppValidators.email]],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signInSubmit() {
    this.form.markAllAsTouched()
    if(this.form.invalid) return;
    this.signIn.emit(this.form.value);
  }

}
