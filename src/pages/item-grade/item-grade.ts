import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the ItemGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-grade',
  templateUrl: 'item-grade.html',
})
export class ItemGradePage {
  public item = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get("item")
   /*  if(this.item.itemname==null){
      this.item.itemname="courseTotal"
      this.item.weightformatted="-"
    } */
  }

}
