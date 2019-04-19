import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent],
  exports:[LogoComponent]
})
export class ComponentsModule { }
