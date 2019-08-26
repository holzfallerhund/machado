import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post/post.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})

export class NewPostPage implements OnInit {

  post: Post = { title: '', subject: '', description: ''};

  constructor(private postService: PostService, public navCtrl: NavController, public alertController: AlertController, private toast: ToastController) { }

  ngOnInit() {
  }

  newPost() {
    const record = {};
    record['title'] = this.post.title;
    record['subject'] = this.post.subject;
    record['description'] = this.post.description;

    if(this.post.title && this.post.subject && this.post.description){
    this.postService.create_NewPost(record).then(resp => {
      this.post.title = '';
      this.post.subject = '';
      this.post.description = '';
      console.log(resp);

      this.toast.create({
        message: "Postagem enviada com sucesso!",
        duration: 2000,
        animated: true,
        position: 'top'
      }).then((obj) => {
        obj.present();
      });

    })
      .catch(error => {
        console.log(error);
      });
    }
    else{
      
      this.toast.create({
        message: "Preencha todos os campos!",
        duration: 2000,
        animated: true,
        position: 'top'
      }).then((obj) => {
        obj.present();
      });
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Postagem enviada com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
  }

  voltar()  {
    this.navCtrl.navigateBack('tabs/tab2');
  }

}
