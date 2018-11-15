import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendancePage } from './attendance/attendance';
import { LeavesPage } from './leaves/leaves';

/**
 * Generated class for the TimeManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-management',
  templateUrl: 'time-management.html',
})
export class TimeManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToAttendance() {
    this.navCtrl.push(AttendancePage)
  }
  goToLeaves() {
    this.navCtrl.push(LeavesPage)
  }
}