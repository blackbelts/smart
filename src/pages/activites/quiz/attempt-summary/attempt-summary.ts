import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';
import { QuestionPage } from '../question/question';
import { AttemptReviewPage } from '../attempt-review/attempt-review';

/**
 * Generated class for the AttemptSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attempt-summary',
  templateUrl: 'attempt-summary.html',
})
export class AttemptSummaryPage {
  public attemptId
  public lastpage
  public summery
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
    public alertCtrl: AlertController
  ) {
  }
  ionViewDidLoad() {
    this.attemptId = this.navParams.get("attemptId")
    this.lastpage = this.navParams.get("lastPage")
    this.moodleProvider.getQuizAttemptSummery(this.attemptId)
      .map(res => res)
      .subscribe(summery => {
        this.setSummery(summery.questions)
      })
  }
  setSummery(summery) {
    this.summery = summery
  }
  goToQuestion(attemptId, page) {
    this.navCtrl.push(QuestionPage, { attempt: attemptId, page: page })
  }
  returnLastquestion(lastPage, attemptId) {
    this.navCtrl.push(QuestionPage, { "attempt": attemptId, "lastPage": lastPage })

  }
  finishAttempt(attemptId) {
    const confirm = this.alertCtrl.create({
      title: 'Submit Quiz',
      message: 'Are You sure From Exit this Quiz',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.moodleProvider.finishQuiz(this.attemptId, 1)
              .map(res => res).
              subscribe(res => {
                console.log(res)
                this.navCtrl.push(AttemptReviewPage, { attemptId: this.attemptId })
              })
          }

        }
      ]
    });
    confirm.present();
  }
}
