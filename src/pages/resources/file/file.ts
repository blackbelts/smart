import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilsProvider } from '../../../providers/utils/utils';
import { FileOpener } from '@ionic-native/file-opener';
import { MoodleProvider } from '../../../providers/moodle/moodle';


/**
 * Generated class for the FilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {
  public id
  public name
  public cid
  public content
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public utils: UtilsProvider,
    private fileOpener: FileOpener,
    public moodle: MoodleProvider
  ) {
    /*  this.id=this.navParams.get("id")
     this.name=this.navParams.get("name")
     this.cid=this.navParams.get('cId') */
    this.id = 3
    this.name = "test"
    this.cid = 11
    if (this.navParams.get("filesContents").length == 0) {
      this.utils.showAlert("no file uploded", "ERROR");
    }
    else {
      this.content = this.navParams.get("filesContents")[0]
    }

  }
  open() {
    console.log(this.content.fileurl + "&token=" + this.moodle.getToken(), this.content.mimetype)
    this.fileOpener.open(this.content.fileurl + "&token=" + this.moodle.getToken(), this.content.mimetype).catch(er => {
      this.utils.showAlert(JSON.stringify(er), "error code")
      console.log("error")
    })

  }

  ionViewDidLoad() {
  }

}
