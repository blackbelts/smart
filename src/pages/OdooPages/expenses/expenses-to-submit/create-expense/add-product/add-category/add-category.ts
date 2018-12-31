import { UtilsProvider } from './../../../../../../../providers/utils/utils';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OdooProvider } from '../../../../../../../providers/odoo/odoo';

/**
 * Generated class for the AddCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  categoryName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public odooProv: OdooProvider, public utils: UtilsProvider) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addCategory(){
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "product.category", "create", [{filed: "name", value:this.categoryName}])
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
          this.utils.showAlert("your category submitted", "OK")
        }
      })
  }

}
