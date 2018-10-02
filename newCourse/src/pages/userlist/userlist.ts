import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the UserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
})
export class UserlistPage {


  currentItems=[];
  public press: number = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    let v={name:"اسم المستخدم",profilePic:"../../assets/imgs/logo.png"}
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
    this.currentItems.push(v)
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
  }
  addItem() {
    this.navCtrl.push(SignupPage)
  }

  pressEvent(ev) {

  }
  deleteItem(item, slidingItem) {

  }
}
