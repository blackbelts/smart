import { LeaveRequestPage } from './../leave-request/leave-request';
import { UtilsProvider } from './../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LeaveToApprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-to-approve',
  templateUrl: 'leave-to-approve.html',
})
export class LeaveToApprovePage {
  showSearchBar
  filters = [
    {
      name: "To Approve",
      domains: [
        {
          filed: "state",
          experssion: "in",
          value: ['confirm', 'validate1']
        }
      ]
    },
    {
      name: "Approved Leaves",
      domains: [
        {
          filed: "state",
          experssion: "%3D",
          value: "validated1"
        }
      ]
    },
    {
      name: "My Department Leaves",
      domains: [
        {
          filed: "'department_id.manager_id.user_id",
          experssion: "%3D",
          value: this.odooProv.getUid()
        }
      ]
    },
    {
      name: "Unread Messages",
      domains: [
        {
          filed: "message_needaction",
          experssion: "%3D",
          value: "True"
        }
      ]
    },
    {
      name: "My Team Leaves",
      domains: [
        {
          filed: "employee_id.parent_id.user_id",
          experssion: "%3D",
          value: this.odooProv.getUid()
        }
      ]
    },
    {
      name: "Leaves",
      domains: [
        {
          filed: "type",
          experssion: "%3D",
          value: "remove"
        }
      ]
    },
    {
      name: "Allocations",
      domains: [
        {
          filed: "type",
          experssion: "%3D",
          value: "add"
        }
      ]
    },
  ]
  filterObj
  leaves
  leaveManager
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider,
    public modalCtrl: ModalController,
    private storage: Storage
  ) {
    this.storage.get("LeavesManager").then(res => {
      this.leaveManager = res
      console.log("leaveManager" + this.leaveManager)
    })
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", [{ filed: "state", experssion: "in", value: ['confirm', 'validate1'] }], [])
      .map(res => res)
      .subscribe(res => {
        this.leaves = res
      })
  }

  toggleSection(i) {
    this.leaves[i].open = !this.leaves[i].open;
  }
  clickedFilterIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }
  filterMethod() {
    this.leaves = undefined
    console.log(this.filterObj)
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", this.filterObj.domains, [])
      .map(res => res)
      .subscribe(res => {
        console.log(res)
        this.leaves = res;
        this.utils.loading.dismiss()
      })
  }
  addFun(edit: boolean, leave = {}) {
    let modal;
    if (edit) {
      modal = this.modalCtrl.create(LeaveRequestPage, { "leave": leave })
    } else {
      modal = this.modalCtrl.create(LeaveRequestPage)
      modal.present();
      modal.onDidDismiss(() => {
      })
    }
  }
}