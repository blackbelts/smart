import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { AddCoursePage } from '../add-course/add-course';
import { CourseProvider } from '../../providers/course/course';
import { Course } from '../../model/course';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CoureseDetailsPage } from '../courese-details/courese-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public coursesList:Observable<Course[]>
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public courseProvider:CourseProvider,
    public db: AngularFireDatabase,
    public modal:ModalController
  ) {
    this.coursesList = this.courseProvider.getCourses()
      .snapshotChanges()
      .map(
        changes =>{
          return changes.map(
            c=>({
              key: c.payload.key, ...c.payload.val()
            })
          )
        }
      )
  }
  openUsersInCourse(Course){

  }
  deleteCourse(course){
    console.log(course)
    this.courseProvider.deleteCourse(course).then(
      ()=>console.log("deleted"),
      error=>console.log("erroe deleted")
    )
  }
  editCourse(course){
    this.navCtrl.push(AddCoursePage,{"course":course,btnedit:true})
  }
  courseDetaisl(course){
    let detailsmodal = this.modal.create(CoureseDetailsPage, { course: course });
   detailsmodal.present();
  }
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    /*let val = ev.target.value;
    if (val && val.trim() != '') {
      this.coursesList = this.coursesList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }*/
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item) {
  }
  addItem() {
    this.navCtrl.push(AddCoursePage)
  }

  pressEvent(ev) {

  }
  deleteItem(item, slidingItem) {

  }

}
