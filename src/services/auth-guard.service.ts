import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isAuthenticated()){
      return true;
    }
    this._router.navigate(['']);
    return false;
  }

  isAuthenticated(){
    let userInfo = localStorage.getItem('userInfo') ?? '{}';
    let accessToken = localStorage.getItem('accessToken') ?? '';
    if(userInfo != '{}' && JSON.parse(userInfo ?? '{}') && accessToken != ''){
        return true;
    }
    return false;
  }
  
}
