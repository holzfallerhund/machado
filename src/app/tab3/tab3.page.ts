import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentUser: {}
  userUid: {}

  constructor(
    private afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public navCtrl: NavController
    ){
      //this.userUid = afAuth.auth.currentUser.uid
      console.log(this.afAuth.auth.currentUser)
  }

  ngOnInit() {
    this.currentUser = {}
    this.userUid = this.afAuth.auth.currentUser.uid
    console.log(this.afAuth.auth.currentUser)
  }

  onSaveProfile() {
    console.log(this.currentUser)
    this.db.list('profile').push(this.currentUser);
  }

  logOut() {
    this.afAuth.auth.signOut().then(LoginPage =>this.navCtrl.navigateForward('login')).catch(console.log);
  }

}
