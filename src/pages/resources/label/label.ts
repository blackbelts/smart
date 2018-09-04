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
    let imgObjs = document.getElementById("hiddenContent").getElementsByTagName("img")
    for (let i = 0; i < imgObjs.length; i++) {
      imgObjs[i].src = imgObjs[i].src + "?token=" + this.mod.getToken()
      console.log(imgObjs[i].src)
    }
  }

}
