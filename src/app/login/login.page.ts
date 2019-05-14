import { Component } from '@angular/core';
import { User } from '../register/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = new User('', '');


  constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController
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
  }

}
