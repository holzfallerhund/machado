import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';

interface IUser {
  email: string
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentUser: IUser = {
    email: ''
  }

  constructor(){}
}
