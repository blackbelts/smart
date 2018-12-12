import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayslipDetailsPage } from './payslip-details';

@NgModule({
  declarations: [
    PayslipDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PayslipDetailsPage),
  ],
})
export class PayslipDetailsPageModule {}
