import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';
import { EventDetailsPage } from './event-details/event-details';

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
  public events=[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.moodle.calenderEventSortTime()
      .map(res => res)
      .subscribe(eventsRes => {
        let events=eventsRes.events
        for(let i=0;i<events.length;i++){
          if(new Date(Date.now())<new Date(events[i].timestart*1000)){
            events[i].icon.component="../assets/icon/"+events[i].icon.component+".svg"
            events[i].timestart=new Date(events[i].timestart*1000).toLocaleString()
            this.events.push(events[i])
          }
        }
      })
      console.log(this.events)
  }
  goToDetails(event){
    this.navCtrl.push(EventDetailsPage,{event:event})
  }
}
