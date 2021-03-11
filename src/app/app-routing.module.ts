import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'filter', loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
  { path: 'college', loadChildren: () => import('./single/single.module').then(m => m.SingleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
