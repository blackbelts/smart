import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';
import { AttemptReviewPage } from '../attempt-review/attempt-review';
import { AttemptSummaryPage } from '../attempt-summary/attempt-summary'
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  public quizName
  public pageNo = 0
  public prevPageNo
  public que = {
    qpage: '',
    qName: '',
    qslot: '',
    qno: "",
    qtype: "",
    qstate: "",
    qgrade: "",
    qtext: '',
    qPrompt: '',
    sequencecheck: {
      name: '',
      value: 1
    },
    resultOptions: []
  }
  public timeInSeconds
  public timerPrint
  public timer = {
    time: this.timeInSeconds,
    runTimer: false,
    hasStarted: false,
    hasFinished: false,
    timeRemaining: this.timeInSeconds
  };
  public resultOptions = []
  public resObj = {
    id: '',
    name: '',
    value: '',
    type: '',
    label: '',
    checked: false
  }
  public queHtml
  public q
  public attemptId
  public pageNext = true
  public pagePrev = true
  public lastPage = ''
  public pageNoFromSummary
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider,
  ) {
  }
  public intiAlarm = false
  ionViewDidLoad() {
    this.intiAlarm = true
    this.attemptId = this.navParams.get("attempt")
    this.quizName = this.navParams.get("name")
    this.lastPage = this.navParams.get("lastPage")
    this.pageNoFromSummary = this.navParams.get("page")
    if (this.lastPage != undefined) {
      this.getquestion(this.attemptId, this.lastPage)
    } else if (this.pageNoFromSummary != undefined) {
      this.getquestion(this.attemptId, this.pageNoFromSummary)
    } else {
      this.getquestion(this.attemptId, this.pageNo)
    }
  }
  getquestion(attempt, pageNo) {
    this.que = {
      qpage: '',
      qName: '',
      qslot: '',
      qno: "",
      qtype: "",
      qstate: "",
      qgrade: "",
      qtext: '',
      qPrompt: '',
      sequencecheck: {
        name: '',
        value: 1
      },
      resultOptions: []
    }

    this.checkPageNo(pageNo)
    this.moodleProvider.getAttemptData(attempt, pageNo)
      .map(res => res)
      .subscribe((atep) => {
        this.attemptId = atep.attempt.id
        this.prevPageNo = this.pageNo
        this.pageNo = atep.nextpage
        this.que.qslot = atep.questions[0].slot
        this.que.qpage = atep.questions[0].page
        this.que.sequencecheck.value = atep.questions[0].sequencecheck
        this.que.qtype = atep.questions[0].type
        this.que.qno = atep.questions[0].number
        this.que.qstate = atep.questions[0].status
        this.que.qgrade = atep.questions[0].maxmark
        this.queHtml = atep.questions[0].html
        if (this.intiAlarm) {
          this.timeInSeconds = (atep.attempt.timecheckstate - atep.attempt.timestart) - (Date.now() / 1000 - atep.attempt.timestart)
          this.initTimer()
          this.startTimer()
          this.intiAlarm = false
        }
        this.setOptions()

      })
  }
  checkPageNo(pageNo) {
    if (pageNo === 0) {
      this.pageNext = false
      this.pagePrev = true
    } else if (pageNo == -1) {
      this.pageNext = true
      this.pagePrev = false
    } else {
      this.pagePrev = false
      this.pageNext = false
    }

  }
  setOptions() {
    this.que.resultOptions = []
    let obj = document.getElementsByClassName("test")
    obj[0].insertAdjacentHTML('afterbegin', this.queHtml)
    this.que.qtext = document.getElementsByClassName("qtext")[0].innerHTML
    this.que.qPrompt = document.getElementsByClassName("prompt")[0].innerHTML
    this.que.sequencecheck.name = document.getElementsByClassName("formulation")[0].children[1].getAttribute("name")
    let p = document.getElementsByClassName("answer")[0].children
    this.que.qName = p[0].children[0].getAttribute("name")
    for (let i = 0; i < document.getElementsByClassName("answer")[0].children.length; i++) {
      this.resObj = {
        id: '',
        name: '',
        value: '',
        type: '',
        label: '',
        checked: false
      }
      this.resObj.id = p[i].children[0].id
      this.resObj.type = p[i].children[0].getAttribute("type")
      this.resObj.name = p[i].children[0].getAttribute("name")
      this.resObj.value = p[i].children[0].getAttribute("value")
      this.resObj.label = p[i].children[1].innerHTML
      let checked = p[i].children[0].getAttribute("checked")
      if (checked == "checked") {
        this.resObj.checked = true
      } else {
        this.resObj.checked = false
      }
      this.que.resultOptions[i] = this.resObj
    }
  }
  getSelectedValue(value) {
    //this.qAns = value
    this.submitAns(this.attemptId, value)
  }
  submitAns(attemptId, qans) {
    this.moodleProvider.submitQestionAnswer(
      attemptId,
      this.que.qslot,
      this.que.sequencecheck.name,
      this.que.sequencecheck.value,
      this.que.qName,
      qans,
      0,
    )
      .map(res => res)
      .subscribe((res) => {
      })
  }
  public goSummery = false
  nextQues(attempt, pageNo) {
    if (pageNo == -1) {
      this.lastPage = this.que.qpage
      this.goSummery = true
      this.navCtrl.push(AttemptSummaryPage, { attemptId: attempt, lastPage: this.lastPage })
    } else {
      this.getquestion(this.attemptId, pageNo)
      this.setOptions()
    }
  }
  prevQues(attempt, pageNo, prevPageNo) {
    if (pageNo == -1) {
      pageNo = prevPageNo
      this.getquestion(attempt, pageNo - 1)
    } else {
      let newp = pageNo - 2
      this.getquestion(attempt, newp)
    }
    this.setOptions()
  }
  initTimer() {
    //this.timeInSeconds = (Date.now() + 7200) - Date.now()
    ///if (!this.timeInSeconds) { this.timeInSeconds = 2500; }

    this.timer = {
      time: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      timeRemaining: this.timeInSeconds
    };
    this.timerPrint = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
  }
  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }
  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.timeRemaining--;
      this.timerPrint = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
      if (this.timer.timeRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
        this.moodleProvider.finishQuiz(this.attemptId, 1)
          .map(res => res)
          .subscribe(res => {
            this.navCtrl.push(AttemptReviewPage, { attemptId: this.attemptId })
          })
      }
    }, 1000);
  }
  getSecondsAsDigitalClock(inputSeconds: number) {
    let sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
 /*  ionViewCanLeave(): boolean {
    // here we can either return true or false
    // depending on if we want to leave this view
    if (this.goSummery) {
      this.goSummery = false
      return true
    }
    else {
      this.navCtrl.popTo(QuizPage)
      return true
    }
  }
 */
}
