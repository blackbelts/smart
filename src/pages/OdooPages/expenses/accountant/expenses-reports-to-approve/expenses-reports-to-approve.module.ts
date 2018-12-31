import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesReportsToApprovePage } from './expenses-reports-to-approve';

@NgModule({
  declarations: [
    ExpensesReportsToApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesReportsToApprovePage),
  ],
})
export class ExpensesReportsToApprovePageModule {}
