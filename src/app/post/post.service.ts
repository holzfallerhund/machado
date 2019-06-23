import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post {  title: string, subject: string, description: string  }

@Injectable()
export class PostService {

  constructor(
    private firestore: AngularFirestore
  ) { }
 
 
  create_NewPost(record) {
    return this.firestore.collection('posts').add(record);
  }
 
  read_Posts() {
    return this.firestore.collection('posts').snapshotChanges();

  }
 
  update_Post(recordID,record){
    this.firestore.doc('posts/' + recordID).update(record);
  }
 
  delete_Post(record_id) {
    this.firestore.doc('posts/' + record_id).delete();
  }

}