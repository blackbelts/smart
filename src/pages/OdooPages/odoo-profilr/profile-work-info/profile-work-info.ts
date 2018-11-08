import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Domain, Map } from '../../../../modals/OdooModal';
import { OdooProvider } from '../../../../providers/odoo/odoo';
import { UtilsProvider } from '../../../../providers/utils/utils';
/**
 * Generated class for the ProfileWorkInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-work-info',
  templateUrl: 'profile-work-info.html',
})
export class ProfileWorkInfoPage {
  private domains: Domain[] = []
  private maps: Map[] = []
  private currentuserId;
  public currentEmpInfo: {} = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.maps.push({ prop: "fields", prop_values: ["name", "id"] })
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee.category", "search_read", this.domains, this.maps)
      .map(res => res)
      .subscribe((res = []) => {
        res.forEach((element: { id: string, name: string }) => {
          this.storage.set("employeeCategory" + element.id, element.name)
        });
      })
    this.maps.pop()
    this.domains.push({ experssion: "%3D", filed: "id", value: this.odooProv.getUid() });
    this.maps.push({ prop: "fields", prop_values: ["employee_ids"] })
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "res.users", "search_read", this.domains, this.maps)
      .map(res => res)
      .subscribe(res => {
        this.storage.set("currentUserId", res[0].employee_ids[0])
        this.currentuserId = res[0].employee_ids[0];
        this.domains.pop();
        this.domains.push({ experssion: "%3D", filed: "id", value: res[0].employee_ids[0] })
        this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee", "search_read", this.domains)
          .map(res => res)
          .subscribe(res => {
            console.log(res[0])
            this.storage.set("currentEmpInfo", res[0])
            this.currentEmpInfo = res[0]
          })
      })
  }

}
