import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../providers/odoo/odoo';
import { Domain, Map } from '../../../modals/OdooModal';
import { ProfileWorkInfoPage } from './profile-work-info/profile-work-info';
import { ProfilePrivteInfoPage } from './profile-privte-info/profile-privte-info';
import { ProfileHrSettingsPage } from './profile-hr-settings/profile-hr-settings';
import { ProfileAssetsPage } from './profile-assets/profile-assets';


/**
 * Generated class for the OdooProfilrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odoo-profilr',
  templateUrl: 'odoo-profilr.html',
})
export class OdooProfilrPage {
  tab1Root = ProfileWorkInfoPage;
  tab2Root = ProfilePrivteInfoPage;
  tab3Root = ProfileHrSettingsPage;
  tab4Root = ProfileAssetsPage
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider
  ) {
  }
 
  ionViewDidLoad() {
    
  }
  ionChange() {
    console.log("change")
  }

}
