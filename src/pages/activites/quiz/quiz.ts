import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { TimedQuizPage } from './timed-quiz/timed-quiz';
import { AttemptReviewPage } from './attempt-review/attempt-review';
import { QuestionPage } from './question/question';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
    public modalCtrl: ModalController
  ) {
    this.quizId = this.navParams.get('id')
    this.quizId = 6
/*     this.name = this.navParams.get('name')
 */    this.moodleProvider.getQuizesByCourse(10)
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
      });
    this.moodleProvider.getQuizGrade(this.quizId)
      .map(res => res)
      .subscribe((grade) => {
        this.setQuizGrade(grade)
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
      this.quizRulesText += "<div>" + rules[property] + "</div>"
    }
  }
  setQuiz(quiz) {
    this.quizInfo = quiz
  }
  public buttonText
  public progressAttempt
  presentModal() {

    if (this.progressAttempt.length != 0) {
      this.navCtrl.push(QuestionPage, { attempt: this.progressAttempt[0].id })
    }
    else {
      const modal = this.modalCtrl.create(TimedQuizPage, {
        time: this.quizRules[0],
        quizid: this.quizId,
    /*       name: this.quizInfo.name
     */    });
      modal.present();
    }


  }
  showReview(attemptId) {
    this.navCtrl.push(AttemptReviewPage, { "attemptId": attemptId })
  }
  ionViewDidLoad() {
    this.moodleProvider.getUserAttempts(this.quizId, 0, "unfinished")
      .map(res => res)
      .subscribe(inprogressAteempts => {
        console.log(inprogressAteempts)
        console.log(inprogressAteempts.attempts.length)
        if (inprogressAteempts.attempts.length != 0) {
          this.buttonText = "CONTINUE PROGRESS ATTEMPT"
          this.progressAttempt = inprogressAteempts.attempts
        }
        else {
          this.buttonText = "RE-ATTEMPT QUIZ"
        }
      })

  }

}
