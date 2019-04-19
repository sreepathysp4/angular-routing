import { ComponentsModule } from './../components/components.module';
import { NoPageComponent } from './no-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [NoPageComponent],
  exports:[NoPageComponent]
})
export class NoPageModule { }
