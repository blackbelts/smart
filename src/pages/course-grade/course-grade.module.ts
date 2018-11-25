import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseGradePage } from './course-grade';

@NgModule({
  declarations: [
    CourseGradePage,
  ],
  imports: [
    IonicPageModule.forChild(CourseGradePage),
  ],
})
export class CourseGradePageModule {}
