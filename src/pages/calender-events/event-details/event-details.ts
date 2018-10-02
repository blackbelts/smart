import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  public event={
    eventtype:'',
    timestart:'',
    name:'',
    coursefullname:'',
    icon:'',
    modulename:'',
    description:''
  }
  public course={
    
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }
  ionViewDidLoad() {
    let event =this.navParams.get("event")
    this.event.name=event.name
    this.event.coursefullname=event.course.fullname
    this.event.eventtype=event.eventtype
    this.event.modulename=event.modulename
    this.event.description=event.description
    this.event.timestart=event.timestart
    this.event.icon='../'+event.icon.component
  }

}
