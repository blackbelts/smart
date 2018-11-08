import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, MenuController, ToastController } from 'ionic-angular';
/* import { HomePage } from '../home/home'; */
import { MoodleProvider } from '../../providers/moodle/moodle';
import { Observable } from 'rxjs/Observable';
import { UtilsProvider } from '../../providers/utils/utils';
import { NewHomePage } from '../new-home/new-home';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  username = '7mda';
  password = 'Admin@123';
  error = '';
  public auth: Observable<any>
  userId;

  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    public moodleProvider: MoodleProvider,
    public utils: UtilsProvider,
  ) {
    window.addEventListener('beforeunload', () => {
      this.moodleProvider.getUserCourses("2")
    });
  }
  setUser(user) {
    this.userId = user[0].id;
    this.moodleProvider.setUserId(this.userId);
  }

  // go to register page

  // login and go to home page
  login() {
    this.utils.presentLoadingDefault()
    this.moodleProvider.loginRequest(this.username, this.password)
      .subscribe((res) => {
        this.moodleProvider.setToken(res.token);
        if (typeof this.moodleProvider.getToken() === "undefined") {
          const toast = this.toastCtrl.create({
            message: 'Invaild UserName OR Password',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.utils.loading.dismiss()


        }
        else {
          this.moodleProvider.setUserName(this.username);
          this.moodleProvider.setPassword(this.password);
          this.moodleProvider.getUserInformation('username', this.username)
            .map(res => res)
            .subscribe((user) => {
              this.setUser(user);
              this.nav.setRoot(NewHomePage, { "userid": this.userId });
              this.utils.loading.dismiss()
            });
        }
      });


    /*if(this.moodleProvider.loginRequest(this.username,this.password)){
      this.error='';
      this.nav.setRoot(HomePage);
    }
    else{
      this.nav.setRoot(LogInPage);
      this.error='invalid user name and password';
    }*/
  }

  forgotPass() {
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
  }

  ionViewDidLoad() {
  }

}
