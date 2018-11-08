import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAssetsPage } from './profile-assets';

@NgModule({
  declarations: [
    ProfileAssetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileAssetsPage),
  ],
})
export class ProfileAssetsPageModule {}
