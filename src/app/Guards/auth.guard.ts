import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const useserv=inject(AuthService);
  const _router=inject(Router);
  if (useserv.getUser()) {
    return true;
  }else{
    _router.navigate(["/login"])
  }

  return true;
};
