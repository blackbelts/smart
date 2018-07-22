import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the ChatIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-intro',
  templateUrl: 'chat-intro.html',
})
export class ChatIntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToChat(){
    this.navCtrl.push(ChatPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatIntroPage');
  }

}
