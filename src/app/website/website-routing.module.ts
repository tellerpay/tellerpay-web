import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component';
import { DigitalBankingComponent } from './digital-banking/digital-banking.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      { path: '', component: LandingPageComponent },
      { path: 'becomeanagent', component: AboutComponent },
      { path: 'aboutus', component: AgentComponent },
      { path: 'agency-banking', component: AboutComponent },
      { path: 'digital-banking', component: DigitalBankingComponent },
      { path: 'faq', component: FaqsComponent },
      { path: 'land', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
