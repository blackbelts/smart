import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayslipLinePage } from './payslip-line';

@NgModule({
  declarations: [
    PayslipLinePage,
  ],
  imports: [
    IonicPageModule.forChild(PayslipLinePage),
  ],
})
export class PayslipLinePageModule {}
