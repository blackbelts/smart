import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';
import { Storage } from "@ionic/storage";
import { Domain, Map } from '../../../../modals/OdooModal';

/**
 * Generated class for the ProfilePrivteInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-privte-info',
  templateUrl: 'profile-privte-info.html',
})
export class ProfilePrivteInfoPage {
  public currentUserId;
  private domains: Domain[] = [];
  private maps: Map[] = [];
  public currentEmpInfo: {} = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.utils.presentLoadingDefault();
    this.storage.get("currentUserId").then(data => {
      this.currentUserId = data;
      this.domains.push({ experssion: "%3D", filed: "id", value: this.currentUserId })
      this.maps.push({ prop: "fields", prop_values: ["country_id", "identification_id", "passport_id", "bank_account_id", "address_home_id", "gender", "marital", "children", "birthday", "place_of_birth", "visa_no", "permit_no", "visa_expire", "name", "image"] })
      this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee", "search_read", this.domains, this.maps)
        .map(res => res)
        .subscribe(res => {
          this.currentEmpInfo = res[0]
          console.log(this.currentEmpInfo)
          this.utils.loading.dismiss();
        })
    })
  }

  ionViewDidLoad() {

  }

}
