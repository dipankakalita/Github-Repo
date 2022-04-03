import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
    {path: '',loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)},

    {path: 'profile/:parameter',loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)},
    {path: 'error',loadChildren: () => import('./main/error/error.module').then(m => m.ErrorModule)},
    {path: '**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
