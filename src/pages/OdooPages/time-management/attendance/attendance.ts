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
  showSearchBar = false
  filter = "";
  startFilter;
  noattendence = false
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public odooProv: OdooProvider, public utils: UtilsProvider
  ) {
    this.utils.presentLoadingDefault()
    let date = new Date()
    this.startFilter = date.getFullYear() + "-" + (date.getMonth() + 1);
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.attendance", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }, { experssion: "ilike", filed: "check_in", value: this.startFilter }], [])
      .map(res => res)
      .subscribe(res => {
        this.attendanceList = res
        this.utils.loading.dismiss()
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }
  clickedFilterIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }
  filterMethod(month) {
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.attendance", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }, { experssion: "ilike", filed: "check_in", value: month }], [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.attendanceList = res
        if (this.attendanceList.length == 0) {
          this.noattendence = true
        } else {
          this.noattendence = false
        }
        this.utils.loading.dismiss()
        console.log(this.noattendence)
      })
  }
}
