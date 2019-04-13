import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';

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
    public db: AngularFireDatabase
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
}
