import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

constructor(public alertController: AlertController){
  
}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Não disponível',
      message: 'Feature de conversa não disponível em MVP',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
