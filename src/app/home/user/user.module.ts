import { UserRoutes } from './user.routest';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes),
    CommonModule
  ],
  declarations: [UserComponent],
  exports:[UserComponent]
})
export class UserModule { }
