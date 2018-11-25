import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { ForumPage } from '../activites/forum/forum';
import { QuizPage } from '../activites/quiz/quiz';
import { ChoicePage } from '../activites/choice/choice';
import { UrlPage } from '../resources/url/url';
import { FilePage } from '../resources/file/file';
import { LabelPage } from '../resources/label/label';
/* import { BookPage } from '../resources/book/book'; */

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

  openPage(ele) {

    switch (ele.modname) {
      case 'forum': {
        this.navCtrl.push(ForumPage, { id: ele.instance, name: ele.name, cId: this.courseid });
        break;
      }
      case 'quiz': {
        this.navCtrl.push(QuizPage, { id: ele.instance, name: ele.name, cId: this.courseid });
        break;
      }
      case 'choice': {
        this.navCtrl.push(ChoicePage, { id: ele.instance, name: ele.name, cId: this.courseid });
        break;
      }
      case 'url': {
        this.navCtrl.push(UrlPage, { id: ele.instance, name: ele.name, cId: this.courseid });
        break;
      }
      case 'resource': {
        this.navCtrl.push(FilePage, { id: ele.instance, name: ele.name, cId: this.courseid, filesContents: ele.contents });
        break;
      }
      case 'label': {
        this.navCtrl.push(LabelPage, { id: ele.instance, name: ele.name, cId: this.courseid, description: ele.description });
      }
      /* case 'book': {
        this.navCtrl.push(BookPage, { book: ele, cId: this.courseid })
      } */

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
            || module.modname == "resource" || module.modname == 'label'
            || module.modname == "book") {
            this.contents.push(module)
          }
        });
        if (this.contents.length == 0) {
          this.contentFound = true
        }
      });
  }

}
