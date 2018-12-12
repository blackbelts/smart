import { PayslipLinePage } from './../payslip-line/payslip-line';
import { UtilsProvider } from './../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayslipDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payslip-details',
  templateUrl: 'payslip-details.html',
})
export class PayslipDetailsPage {
  lineIds
  lines
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.utils.presentLoadingDefault();
    this.lineIds = this.navParams.get("ids")
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.payslip.line", "search_read", [{ filed: "id", value: this.lineIds, experssion: "in" }], [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.lines = res
        this.utils.loading.dismiss()
      })
  }
  openLine(item) {
    this.navCtrl.push(PayslipLinePage, { line: item })
  }
}
