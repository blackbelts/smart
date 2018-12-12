import { UtilsProvider } from './../../../../../providers/utils/utils';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayslipLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payslip-line',
  templateUrl: 'payslip-line.html',
})
export class PayslipLinePage {
  line;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public utils: UtilsProvider
  ) {
    this.utils.presentLoadingDefault();
    this.line=this.navParams.get("line")
    
    this.utils.loading.dismiss()
  }

}
