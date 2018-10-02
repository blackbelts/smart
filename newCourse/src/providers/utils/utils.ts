import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(
    public alertCtrl: AlertController,
  ) {
  }
  BasicAlert(message,title){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['ok']
    });
    alert.present();
  }

}
