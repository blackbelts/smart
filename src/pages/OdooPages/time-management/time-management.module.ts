import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeManagementPage } from './time-management';

@NgModule({
  declarations: [
    TimeManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeManagementPage),
  ],
})
export class TimeManagementPageModule {}
