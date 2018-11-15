import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  public attendanceList
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public odooProv: OdooProvider, public utils: UtilsProvider
  ) {
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.attendance", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }], [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.attendanceList = res
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
