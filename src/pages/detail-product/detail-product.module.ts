import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProductPage } from './detail-product';

@NgModule({
  declarations: [
    DetailProductPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProductPage),
  ],
  exports: [
    DetailProductPage
  ]
})
export class DetailProductPageModule {}
