import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './products.routes';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [RouterModule.forChild(ProductRoutes), CommonModule],
  declarations: [ProductsComponent],
  exports:[ProductsComponent]
})
export class ProductsModule {}
