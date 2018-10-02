import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';
import { FormControl, FormBuilder } from '@angular/forms';
import { UtilsProvider } from '../../../../providers/utils/utils';

/**
 * Generated class for the AddDiscussionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-discussion',
  templateUrl: 'add-discussion.html',
})
export class AddDiscussionPage {
  public forumid
  public courseid
  public subject
  public postid
  public addpost = false
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mod: MoodleProvider,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private utils: UtilsProvider
  ) {
  }
  public item: FormControl;
  ionViewDidLoad() {
    if (this.navParams.get("postid") != undefined) {
      this.subject = "Re: " + this.navParams.get("subject")
      this.postid = this.navParams.get("postid")
      this.addpost = true
      this.item = this.formBuilder.control('');
    } else {
      this.addpost = false
      this.forumid = this.navParams.get("fid")
      this.courseid = this.navParams.get("cId")
      this.item = this.formBuilder.control('');

    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  addDiscussion() {
    console.log(this.forumid + this.subject + this.item.value)
    if (this.subject != undefined && this.item.value != undefined) {
      this.mod.addForumDiscussion(this.forumid, this.subject, this.item.value)
        .map(res => res)
        .subscribe(res => {
          console.log(res)
          if (res.warnings.length > 0) {
            this.utils.showAlert("You must confirm all data", 'Error')
          } else {
            this.utils.showAlert("Adding done", "done")
            this.viewCtrl.dismiss()
          }
        })
    } else {
      this.utils.showAlert("You must Enter all data", 'Error')
    }
  }
  addPost() {
    if (this.subject != '' && this.item.value != undefined) {
      this.mod.addForumDisussionsPosts(this.postid, this.subject, this.item.value)
        .map(res => res)
        .subscribe(res => {
          console.log(res)
          if (res.warnings.length > 0) {
            this.utils.showAlert("You must confirm all data", 'Error')
          } else {
            this.utils.showAlert("Adding done", "done")
            this.viewCtrl.dismiss()
          }
        })
    } else {
      this.utils.showAlert("You must Enter all data", 'Error')
    }
  }

}
