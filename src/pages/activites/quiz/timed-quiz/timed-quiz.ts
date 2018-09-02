import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';
import { QuestionPage } from '../question/question';
import { UtilsProvider } from '../../../../providers/utils/utils';

/**
 * Generated class for the TimedQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timed-quiz',
  templateUrl: 'timed-quiz.html',
})
export class TimedQuizPage {
  public time
  private quizid
  private attempt
  public quizName
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public moodleProvider: MoodleProvider,
    public utils: UtilsProvider
  ) {
  }

  ionViewDidLoad() {
    this.time = this.navParams.get("time")
    this.quizid = this.navParams.get("quizid")
    this.quizName = this.navParams.get("name")
  }
  stratAttempt() {
    this.moodleProvider.startQuizAttempt(this.quizid)
      .map(res => res)
      .subscribe((attempt) => {
        if (attempt.exception != undefined) {
          this.utils.showAlert(attempt.message,"warning")
        } else {
          this.setAttempt(attempt)
          this.navCtrl.push(QuestionPage, { attempt: this.attempt.attempt.id, name: this.quizName })
        }
      })
  }
  setAttempt(attempt) {
    this.attempt = attempt
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
