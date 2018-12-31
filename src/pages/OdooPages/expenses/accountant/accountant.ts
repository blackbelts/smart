import { ExpensesReportsToPayPage } from './expenses-reports-to-pay/expenses-reports-to-pay';
import { ExpensesReportsToApprovePage } from './expenses-reports-to-approve/expenses-reports-to-approve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountant',
  templateUrl: 'accountant.html',
})
export class AccountantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToExpensesToApprove(){
    this.navCtrl.push(ExpensesReportsToApprovePage)
  }

  goToExpensesToPay(){
    this.navCtrl.push(ExpensesReportsToPayPage)
  }

}
