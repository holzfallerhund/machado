import { Component } from '@angular/core';
import { User } from '../register/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = new User('', '');
  error = '';

  constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      private toast: ToastController
  ) {
  }

  async onLogin(user: User) {
    try{  
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password);
      if (result){
        this.navCtrl.navigateForward('tabs');
      }
    }
    catch(e){
      console.error(e);
    }
      finally{
        this.toast.create({
            message: 'Usuário ou senha incorretos.',
            duration: 2000,
            animated: true,
            position: "top"
          }).then((obj) => {
            obj.present();
          });
        }
      }
    }
