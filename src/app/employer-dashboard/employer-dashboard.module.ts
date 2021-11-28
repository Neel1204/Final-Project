import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerDashboardRoutingModule } from './employer-dashboard-routing.module';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';


@NgModule({
  declarations: [
    EmployerEditComponent
  ],
  imports: [
    CommonModule,
    EmployerDashboardRoutingModule
  ]
})
export class EmployerDashboardModule { }
