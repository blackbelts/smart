import { PayslipDetailsPage } from './payslip-details/payslip-details';
import { UtilsProvider } from './../../../../providers/utils/utils';
import { OdooProvider } from './../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayslipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payslips',
  templateUrl: 'payslips.html',
})
export class PayslipsPage {
  payslips
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.utils.presentLoadingDefault();
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.payslip", "search_read", [{ filed: "employee_id.id", value: this.odooProv.getEmployeeId(), experssion: "%3D" }], [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.payslips = res;
        this.utils.loading.dismiss();
      })
  }
  toggleSection(i) {
    this.payslips[i].open = !this.payslips[i].open;
  }
  payslipsDetails(ids) {
    console.log(ids)
    this.navCtrl.push(PayslipDetailsPage, { ids: ids })
  }
}
