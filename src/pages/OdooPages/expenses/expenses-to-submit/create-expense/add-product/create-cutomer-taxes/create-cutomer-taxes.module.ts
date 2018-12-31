import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCutomerTaxesPage } from './create-cutomer-taxes';

@NgModule({
  declarations: [
    CreateCutomerTaxesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCutomerTaxesPage),
  ],
})
export class CreateCutomerTaxesPageModule {}
