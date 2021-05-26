import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMoneyComponent } from './add-money/add-money.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add-money', component: AddMoneyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
