import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, MenuController } from 'ionic-angular';
import { UtilsProvider } from '../../../providers/utils/utils';
import { NewHomePage } from '../../new-home/new-home';
import { OdooProvider } from '../../../providers/odoo/odoo';
@IonicPage()
@Component({
  selector: 'page-odoo-login',
  templateUrl: 'odoo-login.html',
})
export class OdooLoginPage {
  username = 'ant@g.com'; password = '123456';
  error = ''; userId;
  constructor(
    public nav: NavController, public forgotCtrl: AlertController,
    public menu: MenuController, public utils: UtilsProvider,
    public odooProv: OdooProvider
  ) {
  }
  setUser(id) {
    this.userId = id;
  }
  // go to register page
  // login and go to home page
  login() {
    this.utils.presentLoadingDefault()
    this.odooProv.login(this.username, this.password)
      .map(res => res)
      .subscribe((res) => {
        if (res.error == undefined) {
          this.odooProv.setUid(res.userId)
          this.odooProv.setPassword(this.password)
          this.setUser(res.userId)
          this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "res.users", "search_read", [{ experssion: "%3D", filed: "id", value: this.odooProv.getUid() }], [{ prop: "fields", prop_values: ["employee_ids"] }])
            .map(res2 => res2)
            .subscribe(
              res2 => {
                if (Object(res2).faultString == undefined) {
                  if (res2[0].employee_ids[0] == undefined) {
                    this.utils.loading.dismiss()
                    this.utils.showToast("You are not an employee", 3000, "top")
                  } else {
                    this.odooProv.setEmployeeId(res2[0].employee_ids[0])
                    this.utils.loading.dismiss()
                    this.nav.setRoot(NewHomePage)
                  }
                }
                else {
                  console.log(res2)
                  this.utils.loading.dismiss()
                  this.utils.showToast("error found", 3000, "top")
                }
              },
              error => {
                console.log(error)
              }
            )
        }
        else {
          this.utils.loading.dismiss()
          this.utils.showToast(res.error, 3000, "top")
        }
      });
  }
}
/* forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Send',
          handler: data => {
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  } */
 /* this.odooProv.getOdooData(this.odooProv.getUid(), this.odooProv.getPassword(), "hr.employee", "search_read", [{ filed: "id", experssion: "%3D", value: res[0].employee_ids[0] }], [{ prop: "fields", prop_values: ["id"] }])
                .map(res => res)
                .subscribe(res => {
                  this.odooProv.setEmployeeId(res[0].id)
                  console.log(this.odooProv.getEmployeeId())
                }) */