import { Observable } from 'rxjs/Observable';
import { CreateCutomerTaxesPage } from './../create-cutomer-taxes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { OdooProvider } from '../../../../../../../../providers/odoo/odoo';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddChildrenTaxesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-children-taxes',
  templateUrl: 'add-children-taxes.html',
})
export class AddChildrenTaxesPage {
  childrenTaxes: any
  childrenTax: any
  childrenTaxe: any
  selectedArray: any = [];
  storgaeData: any = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public odooProv: OdooProvider,
    public modalCtrl: ModalController,
    public storage: Storage
  ) {

    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "account.tax", "search_read", [{ filed: "amount_type", experssion: "!=", value: "group" }], [{ prop: "fields", prop_values: ["name", "amount", "amount_type"] }])
      .map(res => res)
      .subscribe(res => {
        this.childrenTaxes = res
        console.log(this.childrenTaxes)
      })
    this.storage.get('groupOfTaxes')
      .then(res => {
        this.storgaeData = res
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addChildrenTaxes() {
    this.viewCtrl.dismiss();
    this.storage.set('groupOfTaxes', this.selectedArray)

  }
  createChildrenTaxes() {
    this.navCtrl.push(CreateCutomerTaxesPage)
  }
  select(data) {
    if (this.selectedArray.length == 0) {
      this.selectedArray.push(data)
    }
    else {
      let found = false
      for (let i = 0; i < this.selectedArray.length; i++) {
        if (this.selectedArray[i].id == data.id) {
          this.selectedArray.splice(i, 1)
          found = true
          break;
        }
      }
      if (found == false)
        this.selectedArray.push(data)
    }
  }
  checkIn(tax) {
    if (this.storgaeData == null)
      return false
    for (let i = 0; i < this.storgaeData.length; i++) {
      if (this.storgaeData[i].id == tax.id) {
        return true
      }
    }
    return false
  }

}
