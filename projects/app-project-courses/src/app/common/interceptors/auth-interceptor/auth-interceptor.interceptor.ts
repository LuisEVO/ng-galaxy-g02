import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from '../../services/session.service';
import { AuthHttpService } from '../../services/auth-http.service';
import { Router } from '@angular/router';

const errorMessage: Map<number, string> = new Map([
  [401, 'Usted no está autorizado'],
])

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refreshing = false;

  constructor(
    private snackbar: MatSnackBar,
    private session: SessionService,
    private authHttp: AuthHttpService,
    private router: Router,
  ) {}

  getRequest(request: HttpRequest<unknown>) {
    let opts = {};
    if (request.method !== 'GET') {
      opts = {
        setHeaders: {
          Authorization: `Bearer ${this.session.accessToken}`
        }
      }
    }
    
    return request.clone(opts)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.getRequest(request))
    .pipe(
      catchError((err: HttpErrorResponse) => {

        if (!this.refreshing && err.status === 401) {
          this.refreshing = true;
          return this.authHttp.refreshToken(this.session.refreshToken)
          .pipe(
            switchMap(() => {
              this.refreshing = false;
              return next.handle(this.getRequest(request))
            }),
            catchError(err => {
              this.session.destroy();
              this.router.navigateByUrl('/login');
              this.refreshing = false;
              return throwError(err);
            })
          )
        }

        const message = errorMessage.get(err.status) || 'Error en el servidor';

        this.snackbar.open(message, 'ok', {
          verticalPosition: 'top',
          horizontalPosition: 'end'
        });

        return throwError(err)
      })
    );
  }
}
