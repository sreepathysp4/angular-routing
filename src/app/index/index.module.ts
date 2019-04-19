import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ComponentsModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule {}
