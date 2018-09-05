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
    description = '<div class="no-overflow"><p style="text-align: center;"></p><h3><b><i>Heading For label about Math</i></b></h3><h5><pre><p></p><ul><li style="text-align: left;">text 1</li></ul><ul><li style="text-align: left;">text2</li></ul><ul><li style="text-align: left;">text3</li></ul></pre></h5><br><p></p><p style="text-align: left;"><img src="http://167.99.243.240/moodle/pluginfile.php/185/mod_label/intro/received_1830151377077310.jpeg" alt="ssss" width="400" height="200" role="presentation" class="atto_image_button_text-bottom"><br></p><h3 style="text-align: center;"><i>video</i></h3><p style="text-align: center;"><i>&nbsp;<video controls="true"><source src="https://www.youtube.com/embed/3ORsUGVNxGs">https://www.youtube.com/embed/3ORsUGVNxGs</video>&nbsp;<br></i></p><p style="text-align: center;"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<video width="300" height="150" controls="true" autoplay="true"><source src="http://167.99.243.240/moodle/pluginfile.php/185/mod_label/intro/small.mp4">http://167.99.243.240/moodle/pluginfile.php/185/mod_label/intro/small.mp4</video>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></i></p><h4 style="text-align: center;"><i><b>Audio</b></i></h4><p style="text-align: center;"><i><b>&nbsp;<audio controls="true"><source src="http://167.99.243.240/moodle/pluginfile.php/185/mod_label/intro/mp3.mp3">http://167.99.243.240/moodle/pluginfile.php/185/mod_label/intro/mp3.mp3</audio>&nbsp;<br></b></i></p><h3 style="text-align: center;"><i><b>Link</b></i></h3><h3 style="text-align: center;"><a href="https://moodle.org">moodle</a><br></h3></div>"'
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
