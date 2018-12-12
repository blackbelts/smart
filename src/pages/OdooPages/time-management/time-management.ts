import { LeaveToApprovePage } from './leaves/leave-to-approve/leave-to-approve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendancePage } from './attendance/attendance';
import { LeavesPage } from './leaves/leaves';
import { LeaveBalancePage } from './leaves/leave-balance/leave-balance';

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
  goToLeavesToApprove() {
    this.navCtrl.push(LeaveToApprovePage)
  }
  goToAttendance() {
    this.navCtrl.push(AttendancePage)
  }
  goToLeaves() {
    this.navCtrl.push(LeavesPage)
  }
  goToLeaveBalance() {
    this.navCtrl.push(LeaveBalancePage)
  }
}
