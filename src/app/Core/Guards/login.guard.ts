import { CanActivateChild, CanActivateChildFn } from '@angular/router';

let LoggedIn:boolean = false;

export const loginGuard: CanActivateChildFn = (childRoute, state) => {

  return true;
};
