import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScormPage } from './scorm';

@NgModule({
  declarations: [
    ScormPage,
  ],
  imports: [
    IonicPageModule.forChild(ScormPage),
  ],
})
export class ScormPageModule {}
