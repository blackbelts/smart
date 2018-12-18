import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooLoginPage } from '../OdooPages/odoo-login/odoo-login';
import { TimeManagementPage } from '../OdooPages/time-management/time-management';
import { LogInPage } from '../log-in/log-in';
import { OdooProvider } from '../../providers/odoo/odoo';
import { OdooProfilrPage } from '../OdooPages/odoo-profilr/odoo-profilr';
import { PayslipsPage } from '../OdooPages/payroll/payslips/payslips';
import { ExpensesPage } from '../OdooPages/expenses/expenses'

/**
 * Generated class for the NewHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-home',
  templateUrl: 'new-home.html',
})
export class NewHomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider
  ) {
  }

  ionViewDidLoad() {
    console.log(this.odooProv.getUid())
    console.log(this.odooProv.getPassword())
  }
  goToLearning() {
    this.navCtrl.setRoot(LogInPage)
  }
  logOut() {
    this.navCtrl.setRoot(OdooLoginPage)
  }
  goToTimeMgmt() {
    this.navCtrl.setRoot(TimeManagementPage)
  }
  goToProfile() {
    this.navCtrl.setRoot(OdooProfilrPage)
  }
  goToPayroll(){
    this.navCtrl.push(PayslipsPage)
  }
  goToExpenses(){
    this.navCtrl.setRoot(ExpensesPage)
  }
}
