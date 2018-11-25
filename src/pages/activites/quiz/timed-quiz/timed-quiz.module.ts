import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimedQuizPage } from './timed-quiz';

@NgModule({
  declarations: [
    TimedQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(TimedQuizPage),
  ],
})
export class TimedQuizPageModule {}
