import { LeaveRequestPage } from './../leave-request/leave-request';
import { UtilsProvider } from './../../../../../providers/utils/utils';
import { OdooProvider } from './../../../../../providers/odoo/odoo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operator/map';

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
      name: "To Approve leaves",
      domains: [
        {
          filed: "state",
          experssion: "in",
          value: ['confirm', 'validate1']
        },
        {
          filed: "type",
          experssion: "%3D",
          value: "remove"
        }
      ],
      selected: true
    },
    {
      name: "To Approve Allocations",
      domains: [
        {
          filed: "state",
          experssion: "in",
          value: ['confirm', 'validate1']
        },
        {
          filed: "type",
          experssion: "%3D",
          value: "add"
        }
      ]
    },
    {
      name: "Approved Leaves",
      domains: [
        {
          filed: "state",
          experssion: "%3D",
          value: "validate"
        },
        {
          filed: "type",
          experssion: "%3D",
          value: "remove"
        }
      ]
    },
    {
      name: "Approved Allocation",
      domains: [
        {
          filed: "state",
          experssion: "%3D",
          value: "validate"
        },
        {
          filed: "type",
          experssion: "%3D",
          value: "add"
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
    this.utils.presentLoadingDefault();
    this.storage.get("LeavesManager").then(res => {
      this.leaveManager = res
    })
    this.initfun();
  }
  initfun() {
    this.leaves = undefined
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", [{ filed: "state", experssion: "in", value: ['confirm', 'validate1'] }, {
      filed: "type", experssion: "%3D", value: "remove"
    }], [])
      .map(res => res)
      .subscribe(res => {
        this.leaves = res;
        this.utils.loading.dismiss()
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
    this.utils.presentLoadingDefault()
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", "search_read", this.filterObj.domains, [])
      .map(res => res)
      .subscribe(res => {
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

    }
    modal.present();
    modal.onDidDismiss(() => {
    })
  }
  leaveAction(item, action) {
    if (action == "action_confirm") {
      this.addFun(true, item)
    }
    else {
      this.utils.presentLoadingDefault();
      this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.holidays", action, [item.id], [])
        .map(res => res)
        .subscribe(res => {
          if (Object(res).faultCode == undefined) {
            this.utils.showAlert("Your action Done", "done");
            this.initfun()
          }
          else {
            this.utils.showAlert(Object(res).faultString, "error")
          }
        })
    }
  }
}