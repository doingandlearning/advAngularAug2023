import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const glencoreGuard: CanActivateFn = (route, state) => {
  const queryParams = route.queryParams;
  const router = inject(Router);
  // Check that there is a token

  if (queryParams['authorized']) {
    return true;
  } else {
    return router.navigateByUrl('/about');
  }
};

// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MyGuardGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     const isConditionMet = false;  // This is just an example, replace with your actual condition

//     if (!isConditionMet) {
//       // Redirect to the '/not-authorized' route or any other route of your choice
//       this.router.navigate(['/not-authorized']);
//       return false;
//     }
//     return true;
//   }
// }
