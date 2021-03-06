import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';
import { LeaveRequestPage } from './leave-request/leave-request';
/**
 * Generated class for the LeavesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaves',
  templateUrl: 'leaves.html',
})
export class LeavesPage {
  public leaves

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public odooProv: OdooProvider, public utils: UtilsProvider,
    public modalCtrl: ModalController
  ) {
    this.utils.presentLoadingDefault();
    this.getLeaves();
  }
  toggleSection(i) {
    this.leaves[i].open = !this.leaves[i].open;
  }
  openModal() {
    const modal = this.modalCtrl.create(LeaveRequestPage)
    modal.present();
    modal.onDidDismiss(() => {
      this.utils.presentLoadingDefault();
      this.getLeaves();
    })
  }
  getLeaves() {
    this.leaves = undefined
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", [{ experssion: "%3D", filed: "employee_id.id", value: this.odooProv.getEmployeeId() }], [{ prop: "fields", prop_values: ["name", "type", "employee_id", "number_of_days", "date_from", "date_to", "holiday_status_id", "state"] }])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.leaves = res
        this.utils.loading.dismiss();

      })
  }
}
