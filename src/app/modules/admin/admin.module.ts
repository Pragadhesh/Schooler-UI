import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MaterialModule } from 'src/app/material.module';
import { ActiveApplicantsComponent } from './active-applicants/active-applicants.component';
import { BasecomponentComponent } from './basecomponent/basecomponent.component';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';
import { SendReportComponent } from './send-report/send-report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ActiveApplicantsComponent,
    BasecomponentComponent,
    VerifyApplicationComponent,
    SendReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
