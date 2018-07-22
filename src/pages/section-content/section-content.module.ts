import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectionContentPage } from './section-content';

@NgModule({
  declarations: [
    SectionContentPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionContentPage),
  ],
})
export class SectionContentPageModule {}
