import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaBateriaPage } from './lista-bateria';

@NgModule({
  declarations: [
    ListaBateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaBateriaPage),
  ],
})
export class ListaBateriaPageModule {}
