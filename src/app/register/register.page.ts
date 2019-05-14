import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = new User('', '');

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {
  }

  async onRegister(user: User) {
    const result = await this.afAuth.auth
      .createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      )
  }

  voltar()  {
    this.navCtrl.navigateForward('login');
  }
  
}
