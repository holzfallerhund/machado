import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { PostService } from '../post/post.service';
import { Observable } from 'rxjs';
import { PostPage } from '../post/post.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  posts;

  ngOnInit() {
    this.provider.read_Posts().subscribe(data => {

      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          subject: e.payload.doc.data()['subject'],
          description: e.payload.doc.data()['description'],
        };
      });
      console.log(this.posts);

    });
  }

  constructor(
    public navCtrl: NavController, private provider: PostService
) {
}

async newPost() {
  this.navCtrl.navigateForward('new-post');
}

openPost(postId: string) {
    this.navCtrl.navigateForward('post/' + postId);
}

}
