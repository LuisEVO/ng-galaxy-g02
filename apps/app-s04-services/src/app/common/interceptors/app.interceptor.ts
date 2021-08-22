import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/app-s04-services/src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const newRequest = request.clone({
      url: environment.BASE_URL + request.url,
    })

    return next.handle(newRequest);
  }
}
