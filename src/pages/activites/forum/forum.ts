import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { ForumPostsPage } from './forum-posts/forum-posts';

/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  public canAdd
  public forumId
  public courseId
  public forumInfo = {}
  public forumDiscussions = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public moodle: MoodleProvider
  ) {
  }

  ionViewDidLoad() {
    this.forumId = this.navParams.get("id");
    this.courseId = this.navParams.get("cId")
    this.moodle.canAddForumDissuction(this.forumId)
      .map(res => res)
      .subscribe(status => {
        this.canAdd = !status.status
      })
    this.moodle.getForumInCourse(this.courseId)
      .map(res => res)
      .subscribe(forums => {
        for (let i = 0; i < forums.length; i++) {
          if (forums[i].id == this.forumId) {
            this.forumInfo = forums[i]
            break;
          }
        }
      })
    this.moodle.getForumDiscussions(this.forumId)
      .map(res => res)
      .subscribe(discussions => {
        this.forumDiscussions = discussions.discussions
      })
  }

  goToPosts(disu) {
    this.navCtrl.push(ForumPostsPage, { discussion: disu })
  }
}
