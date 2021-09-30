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
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from '../../services/session.service';

const errorMessage: Map<number, string> = new Map([
  [401, 'Usted no está autorizado'],
])

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private snackbar: MatSnackBar,
    private session: SessionService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let opts = {};
    if (request.method !== 'GET') {
      opts = {
        setHeaders: {
          Authorization: `Bearer ${this.session.accessToken}`
        }
      }
    }
    
    const req = request.clone(opts)
    
    return next.handle(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {

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
