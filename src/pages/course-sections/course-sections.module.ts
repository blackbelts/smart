import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseSectionsPage } from './course-sections';

@NgModule({
  declarations: [
    CourseSectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseSectionsPage),
  ],
})
export class CourseSectionsPageModule {}
