import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentsPage } from './parents';

@NgModule({
  declarations: [
    ParentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentsPage),
  ],
})
export class ParentsPageModule {}
