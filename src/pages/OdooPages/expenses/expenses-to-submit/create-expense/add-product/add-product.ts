import { CreateVendorTaxesPage } from './create-vendor-taxes/create-vendor-taxes';
import { CreateCutomerTaxesPage } from './create-cutomer-taxes/create-cutomer-taxes';
import { AddCategoryPage } from './add-category/add-category';
import { UtilsProvider } from './../../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';


/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {
  products = [
    {type: "Consumable", value: "consu"},
    {type: "Service", value: "service"} 
  ];

  InvoicingPolicies = [
    {type: "Ordered quantities", value: "order"},
    {type: "Delivered quantities", value: "delivery"} 
  ];

  ReInvoiceExpenses = [
    {type: "No", value: "no"},
    {type: "At cost", value: "cost"},
    {type: "Sales price", value: "sales_price"} 
  ];
  categories;
  internalDescription: any
  type: any
  typee: any
  typea: any
  internalReference: any
  barcode: any
  category: any
  salePrice: any
  cost: any
  customerTaxes: any
  vendorTaxes: any
  customerTax: any
  vendorTax: any
  productName: any
  customerDescription: any
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,  public odooProv: OdooProvider, public utils: UtilsProvider, public modalCtrl: ModalController) {
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "product.category", "search_read", [], [{ prop: "fields", prop_values: ["categ_id","display_name"] }])
    .map(res => res)
    .subscribe(res => {
      this.categories = res
      console.log(this.categories)
    }) 

    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "account.tax", "search_read", [{filed: "type_tax_use", experssion: "%3D", value: "sale"}], [{ prop: "fields", prop_values: ["name"] }])
      .map(res => res)
      .subscribe(res => {
        this.customerTaxes = res
        console.log(this.customerTaxes)
      })

      this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "account.tax", "search_read", [{filed: "type_tax_use", experssion: "%3D", value: "purchase"}], [{ prop: "fields", prop_values: ["name"] }])
      .map(res => res)
      .subscribe(res => {
        this.vendorTaxes = res
        console.log(this.vendorTaxes)
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addProduct(){
    
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "product.product", "create", [{filed: "name", value:this.productName},{ filed: "type", value: this.type.value }, { filed: "default_code", value: this.internalReference}, { filed: "barcode", value: this.barcode}, { filed: "categ_id", value: this.category.id }, { filed: "lst_price", value: this.salePrice}, {filed: "standard_price", value: this.cost}, {filed: "taxes_id", value: this.customerTax.id}, {filed: "supplier_taxes_id", value: this.vendorTax.id}, {filed: "invoice_policy", value: this.typea.value}, {filed: "expense_policy", value: this.typee.value}, {filed: "description", value: this.internalDescription}, {filed: "description_sale", value: this.customerDescription}, {filed: "can_be_expensed", value: true}])
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
          this.utils.showAlert("your product submitted", "OK")
        }
      })
  }
  addCategory(){
    const modal = this.modalCtrl.create(AddCategoryPage)
    modal.present();
  }

  createCustomerTaxes(){
    const modal = this.modalCtrl.create(CreateCutomerTaxesPage)
    modal.present();
  }
  createVendorTaxes(){
    const modal = this.modalCtrl.create(CreateVendorTaxesPage)
    modal.present();
  }
}
