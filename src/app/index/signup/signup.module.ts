import { SignupRoutes } from './signup.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [,
    RouterModule.forChild(SignupRoutes),
    CommonModule
  ],
  declarations: [SignupComponent],
  exports:[SignupComponent]
})
export class SignupModule { }
