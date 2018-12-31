import { Storage } from '@ionic/storage';
import { UtilsProvider } from './../../../../../../../providers/utils/utils';
import { AddChildrenTaxesPage } from '../create-cutomer-taxes/add-children-taxes/add-children-taxes';
import { OdooProvider } from './../../../../../../../providers/odoo/odoo';
import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the CreateCutomerTaxesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-cutomer-taxes',
  templateUrl: 'create-cutomer-taxes.html',
})
export class CreateCutomerTaxesPage {
  taxName: any
  taxScopes = [
    { type: "Sales", value: "sale" },
    { type: "Purchases", value: "purchase" },
    { type: "None", value: "none" }
  ];
  taxComputations = [
    { type: "", value: "" },
    { type: "Group Of Taxes", value: "group" },
    { type: "Fixed", value: "fixed" },
    { type: "Percentage Of Price", value: "percent" },
    { type: "Percentage Of Price Tax Included", value: "division" }

  ]

  taxScopeType: any
  taxComputationType = { type: "", value: "" }
  amount: any
  amountInPercentage: any
  amountInPercentageTaxIncluded: any
  resultData: any
  childrenTaxes: any
  groupOfTaxes: any
  parmList: any
  groupOfTaxesId: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public odooProv: OdooProvider,
    public modalCtrl: ModalController,
    public utils: UtilsProvider,
    public storage: Storage
  ) {
    /*this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "account.tax", "search_read", [{filed: "type_tax_use", experssion: "in", value: ["none", "type_tax_use"]}, {filed: "amount_type", experssion: "!=", value: ["group"]}], [{ prop: "fields", prop_values: ["children_tax_ids"] }])
      .map(res => res)
      .subscribe(res => {
        this.childrenTaxes = res
        console.log(this.childrenTaxes)
      })*/
    this.storage.remove("groupOfTaxes")
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addItem() {
    const modal = this.modalCtrl.create(AddChildrenTaxesPage)
    modal.onDidDismiss(() => {
      this.storage.get("groupOfTaxes")
        .then(res => {
          console.log("add")
          console.log(res)
          this.groupOfTaxes = res
          this.groupOfTaxesId = []
          for (var id in this.groupOfTaxes) {
            this.groupOfTaxesId.push(this.groupOfTaxes[id].id)
            console.log(this.groupOfTaxesId)
          }

        })

    });
    modal.present();
  }

  print() {
    console.log(this.taxComputationType)
  }
  createCustomerTaxes() {


    this.utils.presentLoadingDefault()
    if (this.taxComputationType.type == "Group Of Taxes") {
      this.parmList = [{ filed: "name", value: this.taxName }, { filed: "type_tax_use", value: this.taxScopeType.value }, { filed: "amount_type", value: this.taxComputationType.value }, { filed: "children_tax_ids", value: this.groupOfTaxesId }, { filed: "amount", value: 0.0 }]
    } else {
      this.parmList = [{ filed: "name", value: this.taxName }, { filed: "type_tax_use", value: this.taxScopeType.value }, { filed: "amount_type", value: this.taxComputationType.value }, { filed: "amount", value: this.amount }]
    }
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "account.tax", "create", this.parmList)
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
          this.utils.showAlert("your tax submitted", "OK")
        }
      })
  }

}
