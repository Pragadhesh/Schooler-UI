import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MaterialModule } from 'src/app/material.module';
import { HomepageRoutingModule } from './homepage-routing.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
