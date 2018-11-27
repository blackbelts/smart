import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveToApprovePage } from './leave-to-approve';

@NgModule({
  declarations: [
    LeaveToApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveToApprovePage),
  ],
})
export class LeaveToApprovePageModule {}
