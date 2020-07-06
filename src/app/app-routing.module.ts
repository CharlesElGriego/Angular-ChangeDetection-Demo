import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandpaDComponent } from './default/grandpa-d/grandpa-d.component';
import { GrandpaOPBComponent } from './onpush broken/grandpa-opb/grandpa-opb.component';
import { GrandpaOpComponent } from './onpush/grandpa-op/grandpa-op.component';


const routes: Routes = [
  {
    path: 'default',
    component: GrandpaDComponent
  },
  {
    path: 'onpush',
    component: GrandpaOpComponent
  },
  {
    path: 'onpush-broken',
    component: GrandpaOPBComponent
  },
  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
