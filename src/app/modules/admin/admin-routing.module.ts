import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveApplicantsComponent } from './active-applicants/active-applicants.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BasecomponentComponent } from './basecomponent/basecomponent.component';
import { SendReportComponent } from './send-report/send-report.component';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';
 
const routes: Routes = [
    {   path: 'admin',   component: BasecomponentComponent,
        children :[
            { path: '', component: AdminHomeComponent},
            { path: 'active-applicants', component: ActiveApplicantsComponent},
            { path: 'verify-application', component: VerifyApplicationComponent},
            { path: 'send-report', component: SendReportComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
