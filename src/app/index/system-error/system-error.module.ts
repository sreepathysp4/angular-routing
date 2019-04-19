import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemErrorRoutes } from './system-error.routes';
import { SystemErrorComponent } from './system-error.component';

@NgModule({
  imports: [RouterModule.forChild(SystemErrorRoutes), CommonModule],
  declarations: [SystemErrorComponent],
  exports:[SystemErrorComponent]
})
export class SystemErrorModule {}
