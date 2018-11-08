import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileWorkInfoPage } from './profile-work-info';

@NgModule({
  declarations: [
    ProfileWorkInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileWorkInfoPage),
  ],
})
export class ProfileWorkInfoPageModule {}
