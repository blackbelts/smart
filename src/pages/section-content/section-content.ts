import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { ForumPage } from '../activites/forum/forum';
import { QuizPage } from '../activites/quiz/quiz';
import { ChoicePage } from '../activites/choice/choice';
import { UrlPage } from '../resources/url/url';

/**
 * Generated class for the SectionContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section-content',
  templateUrl: 'section-content.html',
})
export class SectionContentPage {
  section;
  courseid;
  contents = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider
  ) {
  }
  setContents(contents) {
    this.contents = contents[0].modules;
  }

  openPage(type, id, name) {

    switch (type) {
      case 'forum': {
        this.navCtrl.push(ForumPage, { id: id, name: name, cId: this.courseid });
        break;
      }
      case 'quiz': {
        this.navCtrl.push(QuizPage, { id: id, name: name, cId: this.courseid });
        break;
      }
      case 'choice': {
        this.navCtrl.push(ChoicePage, { id: id, name: name, cId: this.courseid });
        break;
      }
      case 'url': {
        this.navCtrl.push(UrlPage, { id: id, name: name, cId: this.courseid });
        break;
      }

    }
  }
  public contentFound = false

  ionViewDidLoad() {
    this.section = this.navParams.get('section');
    this.courseid = this.navParams.get('courseId');
    this.moodleProvider.getCourseContent(this.courseid, 'sectionid', this.section.id)
      .map(res => res)
      .subscribe((contents) => {
        contents[0].modules.forEach(module => {
          if (module.modname == "forum" || module.modname == "quiz"
            || module.modname == "choice" || module.modname == "url"
            || module.modname == "resource") {
            this.contents.push(module)
          }
        });
        if (this.contents.length == 0) {
          this.contentFound = true
        }
      });
  }

}
