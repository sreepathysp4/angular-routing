import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, ComponentsModule, ComponentsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
