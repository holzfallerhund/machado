import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoadingController, NavController } from '@ionic/angular';

export interface Item { title: string }

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})


export class PostPage {

  private itemsCollection: AngularFirestoreDocument<Item>;
  private item: Observable<Item>
  private postID: string;

  constructor(
    private route : ActivatedRoute, 
    private afs: AngularFirestore,
    public navCtrl: NavController
  ) {     
    this.postID = this.route.snapshot.paramMap.get('id')
    this.itemsCollection = afs.doc<Item>('posts/'+this.postID)
    this.item = this.itemsCollection.valueChanges()

  }

  voltar(){
    this.navCtrl.navigateBack('tabs/tab2');
  }
  

}
