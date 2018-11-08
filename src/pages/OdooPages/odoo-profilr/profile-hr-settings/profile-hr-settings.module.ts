import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileHrSettingsPage } from './profile-hr-settings';

@NgModule({
  declarations: [
    ProfileHrSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileHrSettingsPage),
  ],
})
export class ProfileHrSettingsPageModule {}
