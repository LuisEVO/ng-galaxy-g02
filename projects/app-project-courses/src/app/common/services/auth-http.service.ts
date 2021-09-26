import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/app-project-courses/src/environments/environment';
import { tap } from 'rxjs/operators';
import { Credentials } from '../interfaces/credentials.interface';
import { SignInForm } from '../interfaces/sign-in-form.interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private enpoint = `${environment.apiUrl}/api/token/`
  
  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {}

  signIn(form: SignInForm) {
    return this.http.post<Credentials>(this.enpoint, form)
      .pipe(tap(credential => this.session.create(credential)))
  }
}