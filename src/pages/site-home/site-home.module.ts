import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteHomePage } from './site-home';

@NgModule({
  declarations: [
    SiteHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SiteHomePage),
  ],
})
export class SiteHomePageModule {}
