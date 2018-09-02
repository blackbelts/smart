import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {
  public loading
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }
  showAlert(mesg, title) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: mesg,
      buttons: ['OK']
    });
    alert.present();
  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: 'Loading',
      showBackdrop: true,
    });
    this.loading.present();
  }

}
