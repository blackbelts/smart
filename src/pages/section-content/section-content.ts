import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { ForumPage } from '../activites/forum/forum';
import { FolderPage } from '../Resources/folder/folder';
import { FilePage } from '../Resources/file/file';
import { AssignmentPage } from '../activites/assignment/assignment';
import { LessonPage } from '../activites/lesson/lesson';
import { ChoicePage } from '../activites/choice/choice';
import { FeedbackPage } from '../activites/feedback/feedback';
import { QuizPage } from '../activites/quiz/quiz';
import { SurveyPage } from '../activites/survey/survey';
import { ChatIntroPage } from '../activites/chat/chat-intro/chat-intro';
import { UrlPage } from '../Resources/url/url';

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
  contents = [{}];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider
  ) {
  }
  setContents(contents){
    this.contents = contents[0].modules;
    console.log(this.contents);
  }

  openPage(type, id,name){
    switch(type){
      case 'forum':{
        this.navCtrl.push(ForumPage, {id:id,name:name},);
        break;
      }
      case 'chat':{
        this.navCtrl.push(ChatIntroPage,{id:id,name:name});
        break;
      }
      case 'resource':{
        this.navCtrl.push(FilePage,{id:id,name:name});
        break;
      }
      case 'assign':{
        this.navCtrl.push(AssignmentPage,{id:id,name:name});
        break;
      }
      case 'choice':{
        this.navCtrl.push(ChoicePage,{id:id,name:name});
        break;
      }
      case 'lesson':{
        this.navCtrl.push(LessonPage,{id:id,name:name});
        break;
      }
      case 'feedback':{
        this.navCtrl.push(FeedbackPage,{id:id,name:name});
        break;
      }
      case 'quiz':{
        this.navCtrl.push(QuizPage,{id:id,name:name});
        break;
      }
      case 'survey':{
        this.navCtrl.push(SurveyPage,{id:id,name:name});
        break;
      }
      case 'folder':{
        this.navCtrl.push(FolderPage,{id:id,name:name});
        break;
      }
      case 'url':{
        this.navCtrl.push(UrlPage,{id:id,name:name});
        break;
      }
    }
  }

  ionViewDidLoad() {
    this.section = this.navParams.get('section');
    this.courseid = this.navParams.get('courseId');
    this.moodleProvider.getCourseContent(this.courseid,'sectionid',this.section.id)
    .map(res=>res)
    .subscribe((contents)=>{
      this.setContents(contents);
      console.log(contents);
    });
  }

}
