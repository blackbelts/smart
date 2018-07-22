import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkshopPage } from './workshop';

@NgModule({
  declarations: [
    WorkshopPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkshopPage),
  ],
})
export class WorkshopPageModule {}
