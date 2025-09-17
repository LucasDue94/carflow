import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return true;
  /*  if (this.authService.isLoggedIn()) {
      return true; // usuário logado, permite acesso
    } else {
      // não logado, redireciona para login
      return this.router.parseUrl('/login');
    }*/
  }
}
