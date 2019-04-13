import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  model = new User('', '');

  constructor(private afAuth: AngularFireAuth) {
  }

  onRegister() {
    this.afAuth.auth
      .createUserWithEmailAndPassword(
        this.model.email,
        this.model.password
      )
  }

}
