import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { MoodleProvider } from '../../../providers/moodle/moodle';

/**
 * Generated class for the ChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {
  public choiceOptions: any = [{}]
  public check = true
  private id = 6
  private choiceAns
  private chartdata: any = []
  public name
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodelProvider: MoodleProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
  ) {
    this.id = this.navParams.get('id')
    this.name = this.navParams.get('name')
    this.moodelProvider.getModChoiceOptions(this.id)
      .map(res => res)
      .subscribe((options) => {
        this.setOptionsAndIntiGraph(options.options);
      });
  }
  setOptionsAndIntiGraph(options) {
    this.choiceOptions = options;
    for (let i = 0; i < this.choiceOptions.length; i++) {
      console.log(this.choiceOptions[i].id)
      let option = {
        name: this.choiceOptions[i].text,
        y: this.choiceOptions[i].countanswers
      }
      this.chartdata.push(option);
    }
    this.drawChart(this.chartdata)

  }

  choiceAnswer(value) {
    this.choiceAns = value
  }

  saveChoice() {
    if (typeof this.choiceAns == "undefined") {
      this.presentToast("You Must Choice one From answers")
    } else {
      console.log(this.choiceAns)
      this.moodelProvider.submitChoiceAnswer(this.id, this.choiceAns)
        .map(res => res)
        .subscribe((contents) => {
          this.presentToast("Your answer Submited")
          location.reload();
        });
    }
  }

  removeChoice() {
    const confirm = this.alertCtrl.create({
      title: 'Delete Answer',
      message: 'Do you Sure from this action?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.moodelProvider.deleteSubmitedChoice(this.id)
              .map(res => res)
              .subscribe((contents) => {
                this.presentToast("Your answer DELETED")
                this.navCtrl.setRoot(this.navCtrl.getActive().component);
              });
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    confirm.present();

  }
  presentToast(mesg) {
    const toast = this.toastCtrl.create({
      message: mesg,
      duration: 3000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'

    });
    toast.present();
  }


  drawChart(data) {

    console.log(data)
    HighCharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Response'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'choice by',
       // colorByPoint: true,
        data: data
      }]
    });
  }
  ionViewDidLoad() {
  }
}
