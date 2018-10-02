import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MoodleProvider } from '../../../../providers/moodle/moodle';
import { AddDiscussionPage } from '../add-discussion/add-discussion';

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
  public discussionInfo: any
  public posts = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider,
    public modal: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.discussionInfo = JSON.parse(JSON.stringify(this.navParams.get("discussion")))
    this.moodle.getForumDisussionsPosts(this.discussionInfo.discussion)
      .map(res => res)
      .subscribe(posts => {
        this.posts = posts.posts
      })
  }
  replay(postid, subject) {
    let m = this.modal.create(AddDiscussionPage, { postid: postid, subject: subject })
    m.present()
  }

}
