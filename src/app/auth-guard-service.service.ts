import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
  }

  canActivate(): boolean {
    if (!this.afAuth.auth.currentUser.uid) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
