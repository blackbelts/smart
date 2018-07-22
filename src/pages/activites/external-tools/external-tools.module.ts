import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExternalToolsPage } from './external-tools';

@NgModule({
  declarations: [
    ExternalToolsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExternalToolsPage),
  ],
})
export class ExternalToolsPageModule {}
