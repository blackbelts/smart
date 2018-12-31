import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensesToSubmitPage } from './expenses-to-submit';

@NgModule({
  declarations: [
    ExpensesToSubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensesToSubmitPage),
  ],
})
export class ExpensesToSubmitPageModule {}
