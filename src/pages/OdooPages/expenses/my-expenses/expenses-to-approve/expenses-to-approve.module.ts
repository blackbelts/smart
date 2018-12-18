import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesToApprovePage } from './expenses-to-approve';

@NgModule({
  declarations: [
    ExpensesToApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesToApprovePage),
  ],
})
export class ExpensesToApprovePageModule {}
