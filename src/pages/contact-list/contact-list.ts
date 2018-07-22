import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {
  contacts = [{}];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider ) {
  }
  setContacts(contacts){
    this.contacts = contacts.contacts;
  }
  ionViewDidLoad() {
    this.moodleProvider.getUserContacts(this.moodleProvider.getUserId())
    .map(res=>res)
    .subscribe((contacts)=>{
      this.setContacts(contacts);
    });

  }

}
