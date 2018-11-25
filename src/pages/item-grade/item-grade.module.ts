import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemGradePage } from './item-grade';

@NgModule({
  declarations: [
    ItemGradePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemGradePage),
  ],
})
export class ItemGradePageModule {}
