import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import {ErrorComponent} from './error.component';
import {AllModule} from './../../module/all.module';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    AllModule
  ]
})
export class ErrorModule { }
