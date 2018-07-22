import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseGradePage } from '../course-grade/course-grade';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the GradesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage {
  public courseGrade = {
    id: '',
    grad: '',
    courseName: ''
  }
  public allCourseGrade = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }
  goToCourseGrade(courseId,courseName) {
    console.log(courseId)
    this.navCtrl.push(CourseGradePage,{courseid:courseId,courseName:courseName})
  }
  ionViewDidLoad() {
    this.moodle.finalGradesForAllCourses(0)
      .map(res => res)
      .subscribe(grad => {
        let grads=grad.grades
        for (let i = 0; i < grads.length; i++) {
         
          this.moodle.getCourseByFiled("id",grads[i].courseid)
          .map(res=>res)
          .subscribe(course=>{
            this.courseGrade.id=grads[i].courseid
            this.courseGrade.grad=grads[i].grade
            this.courseGrade.courseName=course.courses[0].fullname
            this.allCourseGrade.push(this.courseGrade)
            this.courseGrade = {
              id: '',
              grad: '',
              courseName: ''
            }
          })
        }
      })
      console.log(this.allCourseGrade)
  }

}
