import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AccountService } from '../Services/account.service';

let isLoggedIn:boolean = false;
let isAdmin:boolean = false;

export const adminGuard: CanMatchFn = (route, segments) => {

  inject(AccountService).isLoggedIn.subscribe(data => {
    isLoggedIn = data;
  });

  inject(AccountService).currentUser.subscribe(data => {
    isAdmin = data.isAdmin;
  });

  if (isLoggedIn && isAdmin){
    return true;
    console.log("User is an Authorized Admin");
  }

  if (isLoggedIn && !isAdmin){
    return false;
    console.log("User is logged in but is not an Authorized Admin");
  }
  else {
    return false;
  }
};
