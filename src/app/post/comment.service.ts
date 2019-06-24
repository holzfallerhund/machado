import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface IComment {  commmentContent: string; postId: string; }

@Injectable()
export class CommentService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewComment(record) {
    return this.firestore.collection('comments').add(record);
  }

  read_Comments(postId: string) {
    return this.firestore.collection('comments', ref => ref.where('postId', '==', postId)).snapshotChanges();
  }

  update_Comment(recordID, record) {
    this.firestore.doc('comments/' + recordID).update(record);
  }

  delete_Comment(record_id) {
    this.firestore.doc('comments/' + record_id).delete();
  }

}
