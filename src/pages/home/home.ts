import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';
import { CouresesPage } from '../coureses/coureses';
import { MoodleProvider } from '../../providers/moodle/moodle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = CouresesPage;
  tab2Root = TimelinePage;

  constructor(
    public navCtrl: NavController,
    public moodleProvider: MoodleProvider,
  ) {

  }



}
