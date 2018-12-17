import { Storage } from '@ionic/storage';
import { UtilsProvider } from './../../../providers/utils/utils';
import { OdooProvider } from './../../../providers/odoo/odoo';
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
  officerOrmanager: any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider,
    private storage: Storage
  ) {
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "res.users", "has_group", ["hr_holidays.group_hr_holidays_user"], [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.officerOrmanager = res
        this.storage.set("LeavesOfficer", res)
        this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "res.users", "has_group", ["hr_holidays.group_hr_holidays_manager"], [])
          .map(res => res)
          .subscribe(res => {
            console.log(res)
            this.storage.set("LeavesManager", res)
          })
      })
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
