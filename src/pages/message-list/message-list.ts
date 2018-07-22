import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the MessageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {
  messages = [{}];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider:MoodleProvider
  ) {
  }
  setMessages(messages){
    this.messages = messages.contacts;
  }

  ionViewDidLoad() {
    this.moodleProvider.getUserMessagesList(this.moodleProvider.getUserId())
    .map(res=>res)
    .subscribe((messages)=>{
      this.setMessages(messages);
    });
  }

}
