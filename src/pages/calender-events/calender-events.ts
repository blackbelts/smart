import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the CalenderEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calender-events',
  templateUrl: 'calender-events.html',
})
export class CalenderEventsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
   this.moodle.calenderEventSortTime(Date.now,0,0,20)
   .map(res=>res)
   .subscribe(events=>{
     console.log(events);
   })
  }
}
