import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoadingController, NavController } from '@ionic/angular';
import { IComment, CommentService } from './comment.service';

export interface Item { title: string; }

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})


export class PostPage {

  private itemsCollection: AngularFirestoreDocument<Item>;
  public item: Observable<Item>;
  private postID: string;
  comments;
  newcomment: IComment =  {  commmentContent: '', postId: '' };

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public navCtrl: NavController,
    private provider: CommentService
  ) {
    this.postID = this.route.snapshot.paramMap.get('id');
    this.itemsCollection = afs.doc<Item>('posts/' + this.postID);
    this.item = this.itemsCollection.valueChanges();

    this.provider.read_Comments(this.postID).subscribe(data => {

      this.comments = data.map(e => {
        return {
          id: e.payload.doc.id,
          commentContent: e.payload.doc.data()['comment'],
          commentPostId: e.payload.doc.data()['postId'],
        };
      });
    });

  }

  voltar() {
    this.navCtrl.navigateBack('tabs/tab2');
  }

  comment() {
    const record = {};
    record['comment'] = this.newcomment.commmentContent;
    record['postId'] = this.postID;
    this.provider.create_NewComment(record).then(resp => {
      this.newcomment.commmentContent = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });


  }
}
