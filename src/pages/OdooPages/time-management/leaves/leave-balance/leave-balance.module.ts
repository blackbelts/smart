import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveBalancePage } from './leave-balance';

@NgModule({
  declarations: [
    LeaveBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveBalancePage),
  ],
})
export class LeaveBalancePageModule {}
