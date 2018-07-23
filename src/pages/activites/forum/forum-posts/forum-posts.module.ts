import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumPostsPage } from './forum-posts';

@NgModule({
  declarations: [
    ForumPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumPostsPage),
  ],
})
export class ForumPostsPageModule {}
