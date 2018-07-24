import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { CourseEnrolledUsersPage } from '../coureses/course-enrolled-users/course-enrolled-users';
import { CourseSectionsPage } from '../course-sections/course-sections';
import { CourseGradePage } from '../course-grade/course-grade';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  max = 100;
  current;
  courses = [{}];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
    public actionSheetCtrl: ActionSheetController,
  ) {

  }

  setCoures(courses) {
    courses.forEach(course => {
      if (course.progress === null)
        course.progress = 0;
      /*  let summary: string = course.summary;
       if (summary.includes('<img ')) {
         course.summary = summary.slice(0, summary.indexOf('<img '));
       } */

    });
    this.courses = courses;
  }
  goToCourseSections(course) {
    this.navCtrl.push(CourseSectionsPage, { course: course });
  }
  presentActionSheet(course) {
    const actionSheet = this.actionSheetCtrl.create({
      title: course.fullname,
      buttons: [
       /*  {
          text: 'Competencies',
          icon: "trophy",
          cssClass: "left",
          handler: () => {

          }
        }, */ {
          text: 'Participants',
          icon: 'people',
          handler: () => {
            this.navCtrl.push(CourseEnrolledUsersPage, { cid: course.id })
          }
        }, {
          text: 'Grades',
          icon: 'stats',
          handler: () => {
            this.navCtrl.push(CourseGradePage, { courseid: course.id });
          }
        }/* , {
          text: 'Notes',
          icon: 'clipboard',
          handler: () => {
          }
        } */, {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
  ionViewDidLoad() {
    this.moodleProvider.getUserCourses(13)
      .map(res => res)
      .subscribe((userCourses) => {
        this.setCoures(userCourses);
      });

  }
}