import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Retorna true se o usuário estiver logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Exemplo simples
  }

  // Opcional: logout
  logout() {
    localStorage.removeItem('token');
  }
}
