import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddChildrenTaxesPage } from './add-children-taxes';

@NgModule({
  declarations: [
    AddChildrenTaxesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddChildrenTaxesPage),
  ],
})
export class AddChildrenTaxesPageModule {}
