import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from 'projects/app-project-courses/src/app/common/services/auth-http.service';
import { SignInForm } from '../../../../common/interfaces/sign-in-form.interface';

@Component({
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss']
})
export class SignInView implements OnInit {

  constructor(
    private authHttp: AuthHttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn(form: SignInForm) {
    this.authHttp.signIn(form)
      .subscribe(() => {
        this.router.navigateByUrl('/admin')
      })
  }

}
