import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayslipsPage } from './payslips';

@NgModule({
  declarations: [
    PayslipsPage,
  ],
  imports: [
    IonicPageModule.forChild(PayslipsPage),
  ],
})
export class PayslipsPageModule {}
