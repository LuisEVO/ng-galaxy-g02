import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCanActivateChildGuard implements CanActivateChild {

  constructor(private router: Router) {
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = true;

    // this.router.createUrlTree([]) = this.router.navigate([])
    // this.router.parseUrl('') = this.router.navigateByUrl('')
    
    return isAuthenticated;
  }
  
}
