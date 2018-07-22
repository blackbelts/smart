import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';

/**
 * Generated class for the PageResourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-resource',
  templateUrl: 'page-resource.html',
})
export class PageResourcePage {
  page = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodleProvider: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.getPageFromMoodle(10,1)
  }
  getPageFromMoodle(courseid,instance){
    this.moodleProvider.getpage(courseid)
    .map(res=>res)
    .subscribe((pages)=>{
      for(let i=0;i<pages.pages.length;i++){
        if(pages.pages[i].id==instance){
          this.setPage(pages.pages[i])
        }
      }
    });
  }
  setPage(page){
    this.page = page
  }
}
