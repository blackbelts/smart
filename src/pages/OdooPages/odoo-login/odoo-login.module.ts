import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OdooLoginPage } from './odoo-login';

@NgModule({
  declarations: [
    OdooLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(OdooLoginPage),
  ],
})
export class OdooLoginPageModule {}
