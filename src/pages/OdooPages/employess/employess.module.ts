import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployessPage } from './employess';

@NgModule({
  declarations: [
    EmployessPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployessPage),
  ],
})
export class EmployessPageModule {}
