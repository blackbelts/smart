import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateVendorTaxesPage } from './create-vendor-taxes';

@NgModule({
  declarations: [
    CreateVendorTaxesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateVendorTaxesPage),
  ],
})
export class CreateVendorTaxesPageModule {}
