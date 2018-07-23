import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';

/**
 * Generated class for the ForumPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum-posts',
  templateUrl: 'forum-posts.html',
})
export class ForumPostsPage {
  public discussionInfo:any
  public posts=[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.discussionInfo = JSON.parse(JSON.stringify(this.navParams.get("discussion")))
    this.moodle.getForumDisussionsPosts(this.discussionInfo.discussion)
    .map(res=>res)
    .subscribe(posts=>{
      this.posts=posts.posts
    })
  }

}
