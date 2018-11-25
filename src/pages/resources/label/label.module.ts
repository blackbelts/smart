import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabelPage } from './label';

@NgModule({
  declarations: [
    LabelPage,
  ],
  imports: [
    IonicPageModule.forChild(LabelPage),
  ],
})
export class LabelPageModule {}
