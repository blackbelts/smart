import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttemptSummaryPage } from './attempt-summary';

@NgModule({
  declarations: [
    AttemptSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(AttemptSummaryPage),
  ],
})
export class AttemptSummaryPageModule {}
