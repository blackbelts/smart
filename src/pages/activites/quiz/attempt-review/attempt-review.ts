import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';

/**
 * Generated class for the AttemptReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attempt-review',
  templateUrl: 'attempt-review.html',
})
export class AttemptReviewPage {
  public attemptId
  public attempt = {}
  public totalQuizGard
  public allQuestionInfo = []
  public questionInfo = {
    slot: '',
    page: '',
    number: '',
    status: '',
    mark: '',
    maxmark: '',
    text: '',
    prompt: '',
    feedback: '',
    options: []
  }
  quesOption = {
    id: '',
    name: '',
    value: '',
    type: '',
    label: '',
    class: '',
    checked: false
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider

  ) {
  }

  ionViewDidLoad() {
    this.attemptId = this.navParams.get("attemptId")
/*     this.attemptId = 74
 */    this.moodleProvider.getQuizAttemptReview(this.attemptId)
      .map(res => res)
      .subscribe(review => {
        this.attempt = review.attempt
        let questions = review.questions
        for (let i = 0; i < questions.length; i++) {
          this.questionInfo = {
            slot: '',
            page: '',
            number: '',
            status: '',
            mark: '',
            maxmark: '',
            text: '',
            prompt: '',
            feedback:'',
            options: []
          }
          this.questionInfo.slot = questions[i].slot
          this.questionInfo.page = questions[i].page
          this.questionInfo.number = questions[i].number
          this.questionInfo.status = questions[i].status
          this.questionInfo.mark = questions[i].mark
          this.questionInfo.maxmark = questions[i].maxmark
          let htmlObj = document.getElementsByClassName("test")
          htmlObj[0].innerHTML = questions[i].html
          this.questionInfo.text = document.getElementsByClassName("qtext")[0].innerHTML
          this.questionInfo.prompt = document.getElementsByClassName("prompt")[0].innerHTML
          this.questionInfo.feedback=document.getElementsByClassName("feedback")[0].innerHTML
          let p = document.getElementsByClassName("answer")[0].children
          for (let i = 0; i < document.getElementsByClassName("answer")[0].children.length; i++) {
            this.quesOption = {
              id: '',
              name: '',
              value: '',
              type: '',
              label: '',
              class: '',
              checked: false
            }
            this.quesOption.id = p[i].children[0].id
            this.quesOption.type = p[i].children[0].getAttribute("type")
            this.quesOption.name = p[i].children[0].getAttribute("name")
            this.quesOption.value = p[i].children[0].getAttribute("value")
            this.quesOption.label = p[i].children[1].innerHTML
            let checked = p[i].children[0].getAttribute("checked")
            if (checked == "checked") {
              if (this.questionInfo.status == "Correct") {
                this.quesOption.class = "true"
              }
              else if (this.questionInfo.status == "Incorrect") {
                this.quesOption.class = "false"
              } else {
                this.quesOption.class = ""
              }
              this.quesOption.checked = true
            } else {
              this.quesOption.checked = false
            }
            this.questionInfo.options.push(this.quesOption)
          }
          this.allQuestionInfo.push(this.questionInfo)

        }
        console.log(this.allQuestionInfo)
      })
  }
  getTime(time) {
    return new Date(time * 1000).toLocaleString()
  }
  calcQuizTime(start, finish) {
    let timeinseconds = finish - start
    let h = Math.floor(timeinseconds / 3600)
    let m = Math.floor((timeinseconds % 3600) / 60)
    let s = Math.floor((timeinseconds % 3600) % 60)
    return h + " hours " + m + " mins " + s + " secs"
  }
}