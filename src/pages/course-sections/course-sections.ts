import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { SectionContentPage } from '../section-content/section-content';

/**
 * Generated class for the CourseSectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-sections',
  templateUrl: 'course-sections.html',
})
export class CourseSectionsPage {
  course;
  sections = [{}];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider) {
  }
  setSections(sections) {
    this.sections = sections;
  }
  goToSectionContent(section) {
    this.navCtrl.push(SectionContentPage, { section: section, courseId: this.course.id });
  }
  ionViewDidLoad() {
    this.course = this.navParams.get('course');
    this.getSection(this.course.id)
  }
  public sectionsFound=false
  getSection(id) {
    this.moodleProvider.getCourseContent(id, 'excludemodules', 1)
      .map(res => res)
      .subscribe((sections) => {
        this.setSections(sections);
        if(this.sections.length==0){
          this.sectionsFound=true
        }
      });
  }
  doRefresh(refresher) {
    this.getSection(this.course.id)
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
