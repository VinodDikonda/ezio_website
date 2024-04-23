import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let islogin=sessionStorage.getItem("islogin");

  if (islogin=='true'){
    return true;
  }

  else
    return false
  
};
