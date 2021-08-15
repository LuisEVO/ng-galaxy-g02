import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCanLoadGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));

    // this.router.createUrlTree([]) = this.router.navigate([])
    // this.router.parseUrl('') = this.router.navigateByUrl('')
    
    return isAuthenticated || this.router.parseUrl('/');
  }
}
