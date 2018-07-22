import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouresesPage } from './coureses';

@NgModule({
  declarations: [
    CouresesPage,
  ],
  imports: [
    IonicPageModule.forChild(CouresesPage),
  ],
})
export class CouresesPageModule {}
