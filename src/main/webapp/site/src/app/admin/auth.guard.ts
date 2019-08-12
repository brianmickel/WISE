import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) {
    if (this.userService.isAdmin()) {
      return true;
    } else if (this.userService.isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    } else {
      this.userService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}