import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      { path: 'land', component: LandingPageComponent },
      { path: 'becomeanagent', component: AboutComponent },
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
