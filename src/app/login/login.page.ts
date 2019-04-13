import { Component } from '@angular/core';
import { User } from '../register/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  model = new User('', '');


  constructor(
      private afAuth: AngularFireAuth,
      private router: Router
  ) {
  }

  onLogin() {
    this.afAuth.auth
      .signInWithEmailAndPassword(
        this.model.email,
        this.model.password
      ).then((val) => {
        console.log(val)
        this.router.navigateByUrl('/tabs')
      })
  }

}
