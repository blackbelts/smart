import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { TimedQuizPage } from './timed-quiz/timed-quiz';
import { AttemptReviewPage } from './attempt-review/attempt-review';
import { QuestionPage } from './question/question';
import { UtilsProvider } from '../../../providers/utils/utils';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  private quizId;
  /* private name;
  private courseId; */
  public quizInfo = {}
  public quizRules: any
  public quizRulesText: any
  public userAttempts
  public grade
  public hasgrade: boolean
  public showContent: boolean
  public canAttempt: boolean
  public numberOfAttempts
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
    public modalCtrl: ModalController,
    public ViewController: ViewController,
    public utils: UtilsProvider
  ) {
    this.showContent = true
    this.utils.presentLoadingDefault();
    this.quizId = this.navParams.get('id')
    this.moodleProvider.getQuizesByCourse(this.navParams.get("cId"))
      .map(res => res)
      .subscribe((quizzes) => {
        for (let i = 0; i < quizzes.quizzes.length; i++) {
          if (quizzes.quizzes[i].id == this.quizId) {
            this.setQuiz(quizzes.quizzes[i])
          }
        }
      });
    this.moodleProvider.getQuizAccessInfo(this.quizId)
      .map(res => res)
      .subscribe((quiz) => {
        this.setQuizRules(quiz.accessrules)

      });
    this.moodleProvider.getUserAttempts(this.quizId)
      .map(res => res)
      .subscribe((attempts) => {
        this.setUserAttempts(attempts.attempts)
        console.log(this.numberOfAttempts+"   "+ attempts.attempts.length)
        console.log(this.numberOfAttempts == attempts.attempts.length)
        if (this.numberOfAttempts == attempts.attempts.length) {
          this.canAttempt = true
        } else {
          this.canAttempt = false
        }
      });
    this.moodleProvider.getQuizGrade(this.quizId)
      .map(res => res)
      .subscribe((grade) => {
        this.setQuizGrade(grade)
        this.utils.loading.dismiss()
        this.showContent = false
      });
  }
  setQuizGrade(grade) {
    this.grade = grade.grade
    this.hasgrade = grade.hasgrade
  }
  setUserAttempts(attempts) {
    this.userAttempts = attempts
  }
  setQuizRules(rules) {
    this.quizRules = rules
    this.quizRulesText = ""
    for (let property in rules) {
      this.quizRulesText += "<div>" + rules[property] + "</div><hr>"
    }
  }
  public quizOpenTimeStart: boolean
  public quizTimeFinish: boolean
  setQuiz(quiz) {
    this.quizInfo = quiz
    this.numberOfAttempts = quiz.attempts
    if (quiz.timeopen != 0) {
      if (new Date(quiz.timeopen * 1000) <= new Date(Date.now())) {
        this.quizOpenTimeStart = false
      } else {
        this.quizOpenTimeStart = true
      }
    }
    if (quiz.timeclose != 0) {
      if (new Date(quiz.timeclose * 1000) >= new Date(Date.now())) {
        this.quizTimeFinish = false
      } else {
        this.quizTimeFinish = true
      }
    }

  }
  public buttonText = "START ATTEMPT QUIZ"
  public progressAttempt = []
  presentModal() {

    if (this.progressAttempt.length != 0) {
      this.navCtrl.push(QuestionPage, { attempt: this.progressAttempt[0].id })
    }
    /*  else if(this.){
 
     } */
    else {
      let time
      this.quizRules.forEach(rule => {
        rule.indexOf("Time limit")
        console.log(rule.indexOf("Time limit"))
        if (rule.indexOf("Time limit") != -1) {
          time = rule
        }
      });
      const modal = this.modalCtrl.create(TimedQuizPage, {
        time: time,
        quizid: this.quizId,
        /*name: this.quizInfo.name*/
      });
      modal.present();
    }


  }
  showReview(attemptId) {
    this.navCtrl.push(AttemptReviewPage, { "attemptId": attemptId })
  }
  public firstAteempt = true;

  ionViewDidLoad() {
    this.moodleProvider.getUserAttempts(this.quizId, 0, "unfinished")
      .map(res => res)
      .subscribe(inprogressAteempts => {
        if (inprogressAteempts.attempts.length != 0) {
          this.buttonText = "CONTINUE PROGRESS ATTEMPT"
          this.progressAttempt = inprogressAteempts.attempts
        }
        else {
          if (this.userAttempts == 0) {
            this.firstAteempt = true
            this.buttonText = "START ATTEMPT QUIZ"
          } else {
            this.firstAteempt = false
            this.buttonText = "RE-ATTEMPT QUIZ"
          }
        }
      })
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.navCtrl.push(this.navCtrl.getActive().component, { "id": this.quizId }).then(() => {
        let index = this.ViewController.index;
        this.navCtrl.remove(index);
      })
      refresher.complete();
    }, 2000);
  }
}
