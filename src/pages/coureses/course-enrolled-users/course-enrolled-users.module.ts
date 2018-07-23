import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseEnrolledUsersPage } from './course-enrolled-users';

@NgModule({
  declarations: [
    CourseEnrolledUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseEnrolledUsersPage),
  ],
})
export class CourseEnrolledUsersPageModule {}
