import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';

/**
 * Generated class for the LabelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-label',
  templateUrl: 'label.html',
})
export class LabelPage {
  public description
  img: HTMLImageElement
  constructor(public navCtrl: NavController, public navParams: NavParams, public mod: MoodleProvider) {

  }

  ionViewDidLoad() {
    let description = this.navParams.get("description")
    document.getElementById("hiddenContent").insertAdjacentHTML('afterbegin', description)
    let objs = document.getElementById("hiddenContent").querySelectorAll("[src]")
    console.log(objs)
    for (let i = 0; i < objs.length; i++) {
      if (objs[i].getAttribute("src").search(this.mod.getSiteUrl()) != -1) {
        objs[i].setAttribute("src", this.addTokenToUrl(objs[i].getAttribute("src")))
      }
    }
  }
  addTokenToUrl(url) {
    let slicedUrl = url.slice(this.mod.getSiteUrl().length)
    return this.mod.getSiteUrl() + "/webservice" + slicedUrl + "?token=" + this.mod.getToken()
  }
}
