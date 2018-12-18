import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyExpensesPage } from './my-expenses';

@NgModule({
  declarations: [
    MyExpensesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyExpensesPage),
  ],
})
export class MyExpensesPageModule {}
