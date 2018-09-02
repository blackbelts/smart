import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { CourseSectionsPage } from '../course-sections/course-sections';
import { GradesPage } from '../grades/grades';
import { CourseEnrolledUsersPage } from './course-enrolled-users/course-enrolled-users';

/**
 * Generated class for the CouresesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coureses',
  templateUrl: 'coureses.html',
})
export class CouresesPage {
  max = 100;
  current;
  courses = [{}];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
    public actionSheetCtrl: ActionSheetController,
    public app: App
  ) {
  }

  setCoures(courses) {
    courses.forEach(course => {
      if (course.progress === null)
        course.progress = 0;
      let summary: string = course.summary;
      if (summary.includes('<img ')) {
        course.summary = summary.slice(0, summary.indexOf('<img '));
      }

    });
    this.courses = courses;
  }
  goToCourseSections(course) {
    this.app.getRootNav().push(CourseSectionsPage, { course: course });
  }
  presentActionSheet(course) {
    const actionSheet = this.actionSheetCtrl.create({
      title: course.fullname,
      buttons: [
        {
          text: 'Participants',
          icon: 'people',
          handler: () => {
            this.navCtrl.push(CourseEnrolledUsersPage, { cid: course.id })
          }
        }, {
          text: 'Grades',
          icon: 'stats',
          handler: () => {
            this.navCtrl.push(GradesPage);
          }
        }, {
          text: 'Notes',
          icon: 'clipboard',
          handler: () => {
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
  ionViewDidLoad() {
    this.moodleProvider.getUserCourses(2)
      .map(res => res)
      .subscribe((userCourses) => {
        this.setCoures(userCourses);
      });
  }

}
