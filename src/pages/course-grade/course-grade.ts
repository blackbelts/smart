import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemGradePage } from '../item-grade/item-grade';
import { MoodleProvider } from '../../providers/moodle/moodle';

/**
 * Generated class for the CourseGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-grade',
  templateUrl: 'course-grade.html',
})
export class CourseGradePage {
  private courseid
  public course={}
  public courseName
  public itemsGrad = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }
  goToItemGrade(item) {
    this.navCtrl.push(ItemGradePage,{item:item});
  }
  ionViewDidLoad() {
    this.courseid = this.navParams.get("courseid")
    this.courseName = this.navParams.get("courseName")
    this.moodle.getItemsGrade(this.courseid, this.moodle.getUserId(), 0)
      .map(res => res)
      .subscribe(itemsGrade => {
        this.itemsGrad = itemsGrade.usergrades[0].gradeitems
        this.course = this.itemsGrad.pop()
      })
  }

}
