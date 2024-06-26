import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { DetailProductComponent } from './domains/products/pages/detail-product/detail-product.component';

export const routes: Routes = [
  {
    path : '',
    component : ListComponent
  },
  {
    path : 'product/:id',
    component : DetailProductComponent
  }
];
