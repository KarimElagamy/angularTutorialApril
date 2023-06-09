import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { AccountService } from '../Services/account.service';

let LoggedIn:boolean = false;

export const loginGuard: CanActivateChildFn = (childRoute, state) => {

  inject(AccountService).isLoggedIn.subscribe(data => {
    LoggedIn = data;
  });

  if (LoggedIn){
    return true;
  }
  else {
    return false;
  }
};
