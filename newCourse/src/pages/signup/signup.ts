import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 public account: {
   name: string, identity: string,
    password: string,number:string,
    myDate:string, gender:string,
    sign:string

  } = {
    name: '',
    identity: '',
    password: '',
    number:'',
    myDate:'MM/DD/YYYY',
    gender:'m',
    sign:''

  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
