import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Post } from '../post/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  ngOnInit(): void {
    this.posts = this.provider.getAll();
  }

  posts: Observable<any>;

  constructor(
    public navCtrl: NavController, private provider: Post
) {
}

async newPost() {
  this.navCtrl.navigateForward('new-post');
}

}
