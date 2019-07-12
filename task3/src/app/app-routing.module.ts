import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Task12Component } from './task12/task12.component';
import { Task13Component } from './task13/task13.component';
import { Task19Component } from './task19/task19.component';

const routes: Routes = [
  {path:'user', component:Comp1Component},
  {path:'list', component:Comp2Component},
  {path:'task12', component:Task12Component},
  {path:'task13', component:Task13Component},
  {path:'task19', component:Task19Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
