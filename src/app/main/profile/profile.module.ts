import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {AllModule} from './../../module/all.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    ProfileComponent,
    PaginationComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AllModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
