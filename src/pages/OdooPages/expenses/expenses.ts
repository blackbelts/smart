import { ExpensesToSubmitPage } from './expenses-to-submit/expenses-to-submit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountantPage } from '../../../pages/OdooPages/expenses/accountant/accountant';



/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMyExpenses() {
    this.navCtrl.push(ExpensesToSubmitPage)
  }
  goToAccountant() {
    this.navCtrl.push(AccountantPage)
  }
  goToAllExpenses(){
    this.navCtrl.push(ExpensesToSubmitPage)
  }
}
