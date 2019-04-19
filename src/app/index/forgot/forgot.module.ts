import { ForgotComponent } from './forgot.component';
import { ForgotRoutes } from './forgot.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(ForgotRoutes),
    CommonModule
  ],
  declarations: [ForgotComponent],
  exports:[ForgotComponent]
})
export class ForgotModule { }
