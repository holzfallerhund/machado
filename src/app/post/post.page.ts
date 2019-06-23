import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

export interface Item { title: string }

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})


export class PostPage {

  private itemsCollection: AngularFirestoreDocument<Item>;
  private item: Observable<Item>
  private heartType: string;
  private postID: string;

  constructor(
    private route : ActivatedRoute, 
    private afs: AngularFirestore
  ) {     
    this.postID = this.route.snapshot.paramMap.get('id')
    this.itemsCollection = afs.doc<Item>('posts/'+this.postID)
    this.item = this.itemsCollection.valueChanges()

  }


  toggleHeart(){
    this.heartType = this.heartType === "heart" ? "heart-empty" : "heart"
  }

}
