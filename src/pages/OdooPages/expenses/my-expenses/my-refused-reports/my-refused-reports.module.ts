import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRefusedReportsPage } from './my-refused-reports';

@NgModule({
  declarations: [
    MyRefusedReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRefusedReportsPage),
  ],
})
export class MyRefusedReportsPageModule {}
