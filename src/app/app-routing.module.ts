import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'request',
    loadChildren: () =>  import('./request/request.module').then( mod => mod.RequestModule)
  },
  {
    path: 'management',
    loadChildren: () =>  import('./management/management.module').then( mod => mod.ManagementModule)
  },
  {
    path: '**', redirectTo: 'request', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
