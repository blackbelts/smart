import { OdooProfilrPage } from './../odoo-profilr/odoo-profilr';
import { UtilsProvider } from './../../../providers/utils/utils';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdooProvider } from '../../../providers/odoo/odoo';

/**
 * Generated class for the EmployessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employess',
  templateUrl: 'employess.html',
})
export class EmployessPage {
  showSearchBar = false
  title = "Employees"
  filter
  filtersOptions = [
    "Employees",
    "Departments",
    "Contracts"
  ]
  empList: any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public odooProv: OdooProvider,
    public utils: UtilsProvider
  ) {
    this.getEmployees()
  }

  ionViewDidLoad() {

  }
  clickedFilterIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }
  filterMethod() {
    if (this.filter == "Employees") {
      this.title = "Employees"
      this.getEmployees()
    } else if (this.filter == "Departments") {
      this.title = "Departments"
      this.getEmployees()
    } else if (this.filter == "Contracts") {
      this.title = "Contracts"
      this.getEmployees()

    }
  }
  getContracts() {

  }
  getDepartments() {

  }
  getEmployees() {
    console.log("emp")
    this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee", "search_read", [], [{ prop: "fields", prop_values: ["name", "work_phone", "work_email", "company_id", "department_id", "job_id", "work_location", "coach_id", "parent_id", "image_small", "message_ids", "message_follower_ids", "attendance_state"] }])
      .map(res => res)
      .subscribe(res => {
        this.empList = res
      })
  }
  openEmployeeProfile(id){
    this.navCtrl.push(OdooProfilrPage,{"empId":id})
  }
}
