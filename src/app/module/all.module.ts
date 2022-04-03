import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {SkeletonModule} from 'primeng/skeleton';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ImageModule} from 'primeng/image';
import {ToastModule} from 'primeng/toast';

const all: any[] = [
  ButtonModule,
  MenubarModule,
  InputTextModule,
  CardModule,
  SkeletonModule,
  AvatarModule,
  AvatarGroupModule,
  ImageModule,
  ToastModule,
];
@NgModule({
  declarations: [],
  imports: [ all ],
  exports: [ all ]
})
export class AllModule { }
