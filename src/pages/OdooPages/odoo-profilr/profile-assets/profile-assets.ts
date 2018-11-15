import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';
import { Storage } from "@ionic/storage";
import { Domain, Map } from '../../../../modals/OdooModal';

/**
 * Generated class for the ProfileAssetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-assets',
  templateUrl: 'profile-assets.html',
})
export class ProfileAssetsPage {
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
      this.maps.push({ prop: "fields", prop_values: ["assets"] })
      this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee", "search_read", this.domains, this.maps)
        .map(res => res)
        .subscribe(res => {
          this.currentEmpInfo = res[0]
          console.log(this.currentEmpInfo)
          this.utils.loading.dismiss();
        })
    })
  }


}
