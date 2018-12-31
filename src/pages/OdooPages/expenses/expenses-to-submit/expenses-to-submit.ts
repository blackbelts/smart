import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';
import { CreateExpensePage } from '../expenses-to-submit/create-expense/create-expense';
/**
 * Generated class for the ExpensesToSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses-to-submit',
  templateUrl: 'expenses-to-submit.html',
})
export class ExpensesToSubmitPage {
  public expensesToSubmitList
  constructor(public navCtrl: NavController, public navParams: NavParams, public odooProv: OdooProvider, public utils: UtilsProvider, public modalCtrl: ModalController) {
   
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.expense", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }], [])
      .map(res => res)
      .subscribe(res => {
        this.expensesToSubmitList = res
        this.utils.loading.dismiss()
      })
  }
  openDetails(i) {
    this.expensesToSubmitList[i].open = !this.expensesToSubmitList[i].open;
  }

  openModal() {
    const modal = this.modalCtrl.create(CreateExpensePage)
    modal.present();
  }

}
