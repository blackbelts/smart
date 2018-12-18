import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensesToApprovePage } from '../../../../pages/OdooPages/expenses/my-expenses/expenses-to-approve/expenses-to-approve';
import { ExpensesToSubmitPage } from '../../../../pages/OdooPages/expenses/my-expenses/expenses-to-submit/expenses-to-submit';
import { MyRefusedReportsPage } from '../../../../pages/OdooPages/expenses/my-expenses/my-refused-reports/my-refused-reports';
import { MyReportsPage } from '../../../../pages/OdooPages/expenses/my-expenses/my-reports/my-reports';

/**
 * Generated class for the MyExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-expenses',
  templateUrl: 'my-expenses.html',
})
export class MyExpensesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToExpensesToSubmit() {
    this.navCtrl.push(ExpensesToSubmitPage)
  }
  goToMyRefusedReports() {
    this.navCtrl.push(MyRefusedReportsPage)
  }
  goToMyReports() {
    this.navCtrl.push(MyReportsPage)
  }
  goToExpensesToApprove() {
    this.navCtrl.push(ExpensesToApprovePage)
  }

}
