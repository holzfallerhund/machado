import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = new User('', '');
  registerError = 0;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private toast: ToastController
  ) {
  }

  async onRegister() {
    this.registerError = 0;
    try {
      const result = await this.afAuth.auth
        .createUserWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
    } catch (e) {
      this.registerError = 1;
      console.error(this.registerError);
      console.error(e);
      this.toast.create({
        message: 'E-mail mal formatado ou senha menor que 6 dígitos!',
        duration: 2000,
        animated: true,
        position: 'top'
      }).then((obj) => {
        obj.present();
      });
    }
    if (this.registerError === 0) { this.navCtrl.navigateForward('login'); }
  }

  voltar() {
    this.navCtrl.navigateForward('login');
  }

}
