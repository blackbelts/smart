import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderEventsPage } from './calender-events';

@NgModule({
  declarations: [
    CalenderEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalenderEventsPage),
  ],
})
export class CalenderEventsPageModule {}
