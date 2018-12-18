import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UtilsProvider } from './../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../providers/odoo/odoo';

/**
 * Generated class for the CreateExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-expense',
  templateUrl: 'create-expense.html',
})
export class CreateExpensePage {
  expenses;
  taxes;
  description: any
  name: any
  unitPrice: any
  quantity: any
  tax: any
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public odooProv: OdooProvider, public utils: UtilsProvider) {
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "product.product", "search_read", [{filed: "can_be_expensed", experssion: "%3D", value: "true"}], [{ prop: "fields", prop_values: ["name"] }])
      .map(res => res)
      .subscribe(res => {
        this.expenses = res
      })
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(),  "account.tax", "search_read", [{filed: "type_tax_use", experssion: "%3D",
    value: "purchase"}], [{ prop: "fields", prop_values: ["name"] }])
      .map(res => res)
      .subscribe(res => {
        this.taxes = res
        
      })
      
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitExpense(){
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.expense", "create", [{ filed: "name", value: this.description }, { filed: "product_id", value: this.name }, { filed: "unit_amount", value: this.unitPrice }, { filed: "quantity", value: this.quantity }, { filed: "tax_ids", value: this.tax }])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        if (Object(res).faultCode != undefined) {
          if (Object(res).faultCode) {

            let fault = String(Object(res).faultString),
              splitedStr = fault.split("odoo.exceptions.ValidationError: (")
            this.utils.loading.dismiss()
            this.utils.showAlert(splitedStr[1].split("!'")[0], "Error")
          }
        } else {
          this.utils.loading.dismiss()
          this.dismiss();
          this.utils.showAlert("your leave submitted", "OK")
        }
      })
  }

}
