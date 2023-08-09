import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

export const AuthTokenGuard: CanActivateFn = (route, state) => {
  const queryParams = route.queryParams;
  return Boolean(queryParams["token"]);
};

// @Injectable({
//   providedIn: "root",
// })
// export class AuthTokenGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const queryParams = route.queryParams;
//     return Boolean(queryParams["token"]);
//   }
// }
