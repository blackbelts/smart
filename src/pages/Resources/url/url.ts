import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider} from '../../../providers/moodle/moodle'
/**
 * Generated class for the UrlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-url',
  templateUrl: 'url.html',
})
export class UrlPage {
  public url = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public moodleProvider: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.getUrlFromMoodle(10,1)
   
  }
  getUrlFromMoodle(courseId,instance){
    this.moodleProvider.getUrl(courseId)
    .map(res=>res)
    .subscribe((urls)=>{
      for(let i=0;i<urls.urls.length;i++){
        if(urls.urls[i].id==instance){
          this.setUrl(urls.urls[i])
          console.log(this.url)
        }
      }
    });
  }
  setUrl(url){
    this.url=url
  }

}
