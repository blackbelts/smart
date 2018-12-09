import { UtilsProvider } from './../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html',
})
export class LeaveRequestPage {
  leavesTypes;
  leaveRequest: {
    type: string,
    desc: string,
    from: string,
    to: string,
    days: number

  } = {
      type: '',
      desc: '',
      from: '',
      to: '',
      days: 0.00
    };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays.status", "search_read", [], [{ prop: "fields", prop_values: ["name", "remaining_leaves"] }])
      .map(res => res)
      .subscribe(res => {
        this.leavesTypes = res
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  calcDays() {
    if (this.leaveRequest.from != '' && this.leaveRequest.to != '')
      this.leaveRequest.days = parseFloat(((Number(new Date(this.leaveRequest.to)) - Number(new Date(this.leaveRequest.from))) / (1000 * 60 * 60 * 24)).toFixed(2))
  }
  submitLeaveRquest() {
    this.utils.presentLoadingDefault()
    console.log(this.leaveRequest)
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "create", [{ filed: "name", value: this.leaveRequest.desc }, { filed: "holiday_status_id", value: this.leaveRequest.type }, { filed: "date_from", value: this.leaveRequest.from }, { filed: "date_to", value: this.leaveRequest.to }, { filed: "employee_id.id", value: "Antoine" }])
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
