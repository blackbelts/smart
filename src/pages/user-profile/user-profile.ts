import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { UserDetailsPage } from './user-details/user-details';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }
  public user = {}
  userId
  ionViewDidLoad() {
    this.userId = this.navParams.get("id")
    if(this.userId==undefined){
      this.userId= this.moodle.getUserId()
    }
    this.moodle.getUserInformation("id",this.userId )
      .map(res => res)
      .subscribe(info => {
        this.user = info[0]
      })
  }
  userDetails(user) {
    this.navCtrl.push(UserDetailsPage, { user: user })
  }
}
