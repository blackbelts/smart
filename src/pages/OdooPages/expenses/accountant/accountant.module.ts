import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountantPage } from './accountant';

@NgModule({
  declarations: [
    AccountantPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountantPage),
  ],
})
export class AccountantPageModule {}
