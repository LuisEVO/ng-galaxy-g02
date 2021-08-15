import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Workshop } from '../interfaces/workshop.interface';

@Injectable({
  providedIn: 'root'
})
export class ResolverDataResolver implements Resolve<Workshop> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Workshop> {

    const workshopId = +route.paramMap.get('workshopId')!;

    // llamar a un servicio rest

    const workshop = {
      id: workshopId,
      title: 'Taller Angular 12',
      img: ''
    }

    return of(workshop).pipe(delay(1000));
  }
}
