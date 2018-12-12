import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../../providers/utils/utils';

/**
 * Generated class for the LeaveBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-balance',
  templateUrl: 'leave-balance.html',
})
export class LeaveBalancePage {
  leavesTypes;
  leaves;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider,
  ) {
    this.utils.presentLoadingDefault();
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays.status", "search_read", [], [{ prop: "fields", prop_values: ["name", "remaining_leaves", "limit"] }])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.leavesTypes = res;
        this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }], [{ prop: "fields", prop_values: ["name", "type", "employee_id", "number_of_days", "date_from", "date_to", "holiday_status_id", "state"] }])
          .map(res => res)
          .subscribe(res2 => {
            console.log(res2)
            this.leaves = res2
            this.utils.loading.dismiss();

          })

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveBalancePage');
  }

}
