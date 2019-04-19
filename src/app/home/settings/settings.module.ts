import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './settings.routes';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [RouterModule.forChild(SettingsRoutes), CommonModule],
  declarations: [SettingsComponent],
  exports:[SettingsComponent]
})
export class SettingsModule {}
