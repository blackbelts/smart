import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';

/**
 * Generated class for the CourseEnrolledUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-enrolled-users',
  templateUrl: 'course-enrolled-users.html',
})
export class CourseEnrolledUsersPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }
  public courseid
  public users:any
  ionViewDidLoad() {
    this.courseid=this.navParams.get("cid")
    this.courseid=10
    console.log(this.courseid)
    this.moodle.getCourseEnrolledUsers(this.courseid)
    .map(res=>res)
    .subscribe(users=>{
      this.users=users
      console.log(this.users)
    })
  }
  getLastAccess(lastaccess){
    return "Lase access: "+new Date(lastaccess).toLocaleString()
  }

}
