import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImsContentPage } from './ims-content';

@NgModule({
  declarations: [
    ImsContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ImsContentPage),
  ],
})
export class ImsContentPageModule {}
