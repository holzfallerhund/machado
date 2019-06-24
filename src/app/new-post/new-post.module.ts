import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPostPage } from './new-post.page';
import { PostService } from '../post/post.service';

const routes: Routes = [
  {
    path: '',
    component: NewPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewPostPage],
  providers : [
    PostService
  ]
})
export class NewPostPageModule {}
