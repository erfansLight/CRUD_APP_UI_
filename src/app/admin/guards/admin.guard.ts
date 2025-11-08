import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';


export const adminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getToken();
  const role = token ? tokenService.getUserRole(token) : null;

  if (role === 'admin') {
    return true;
  }

  router.navigate(['/main-page']);
  return false;
};
