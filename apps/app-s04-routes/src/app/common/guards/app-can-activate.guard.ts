import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCanActivateGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));

    // this.router.createUrlTree([]) = this.router.navigate([])
    // this.router.parseUrl('') = this.router.navigateByUrl('')
    
    return isAuthenticated || this.router.parseUrl('/');
  }
}
