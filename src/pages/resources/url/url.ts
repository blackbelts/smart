import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle'
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

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
    public moodleProvider: MoodleProvider,
    private iab: InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    this.getUrlFromMoodle(this.navParams.get("cId"), this.navParams.get("id"))

  }
  getUrlFromMoodle(courseId, instance) {
    this.moodleProvider.getUrl(courseId)
      .map(res => res)
      .subscribe((urls) => {
        for (let i = 0; i < urls.urls.length; i++) {
          if (urls.urls[i].id == instance) {
            this.setUrl(urls.urls[i])
          }
        }
      });
  }
  setUrl(url) {
    this.url = url
  }
  openLink(url) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      hardwareback: 'no'
    }
    const browser = this.iab.create(url, '_self', options)
    browser.show()
  }

}
