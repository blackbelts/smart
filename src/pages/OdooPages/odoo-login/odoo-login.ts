import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { UtilsProvider } from '../../../providers/utils/utils';
import { Observable } from 'rxjs/Observable';
import { NewHomePage } from '../../new-home/new-home';
import { OdooProvider } from '../../../providers/odoo/odoo';

/**
 * Generated class for the OdooLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odoo-login',
  templateUrl: 'odoo-login.html',
})
export class OdooLoginPage {
  username = 'ant@g.com';
  password = '123456';
  error = '';
  userId;
  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public utils: UtilsProvider,
    public odooProv: OdooProvider
  ) {
  }
  setUser(id) {
    this.userId = id;
  }
  // go to register page
  // login and go to home page
  login() {
    this.utils.presentLoadingDefault()
    this.odooProv.login(this.username, this.password)
      .map(res => res)
      .subscribe((res) => {
        if (res.error == undefined) {
          this.odooProv.setUid(res.userId)
          this.odooProv.setPassword(this.password)
          this.setUser(res.userId)
          this.utils.loading.dismiss()
          this.nav.setRoot(NewHomePage)
        }
        else {
          this.utils.loading.dismiss()
          this.utils.showToast(res.error, 3000, "top")
        }
      });
  }
  /* forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Send',
          handler: data => {
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  } */
  ionViewDidLoad() {
  }
}
