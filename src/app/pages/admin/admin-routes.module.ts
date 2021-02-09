import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './subpages/category/category-list/category-list.component';
import { CategoryDetailComponent } from './subpages/category/category-detail/category-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorListComponent } from './subpages/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './subpages/vendor/vendor-detail/vendor-detail.component';
import { ClientListComponent } from './subpages/client/client-list/client-list.component';
import { ClientDetailComponent } from './subpages/client/client-detail/client-detail.component';
import { PaymentListComponent } from './subpages/payment-type/payment-list/payment-list.component';
import { PaymentDetailComponent } from './subpages/payment-type/payment-detail/payment-detail.component';
import { ProductsListComponent } from './subpages/products/products-list/products-list.component';
import { ProductsDetailComponent } from './subpages/products/products-detail/products-detail.component';
import {ProducstImageListComponent  } from './subpages/products-image/producst-image-list/producst-image-list.component';
import {ProducstImageDetailComponent  } from './subpages/products-image/producst-image-detail/producst-image-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'categorys',
        component: CategoryListComponent,
      },
      {
        path: 'categorys/form',
        component: CategoryDetailComponent,
      },
      {
        path: 'categorys/form/:id',
        component: CategoryDetailComponent,
      },
      {
        path: 'vendors',
        component: VendorListComponent,
      },
      {
        path: 'vendors/form',
        component: VendorDetailComponent,
      },
      {
        path: 'vendors/form/:id',
        component: VendorDetailComponent,
      },
      {
        path: 'clients',
        component: ClientListComponent,
      },
      {
        path: 'clients/form',
        component: ClientDetailComponent,
      },
      {
        path: 'clients/form/:id',
        component: ClientDetailComponent,
      },
      {
        path: 'payment-types',
        component: PaymentListComponent,
      },
      {
        path: 'payment-types/form',
        component: PaymentDetailComponent,
      },

      {
        path: 'payment-types/form/:id',
        component: PaymentDetailComponent,
      },
      {
        path: 'products-new',
        component: ProductsListComponent,
      },
      {
        path: 'products-new/form',
        component:ProductsDetailComponent ,
      },

      {
        path: 'products-new/form/:id',
        component: ProductsDetailComponent,
      },
{
        path: 'products-image',
        component: ProducstImageListComponent,
      },
      {
        path: 'products-image/form',
        component:ProducstImageDetailComponent ,
      },

      {
        path: 'products-image/form/:id',
        component: ProducstImageDetailComponent,
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutesModule {}
