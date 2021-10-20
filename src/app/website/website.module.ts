import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WebsiteComponent } from './website.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentComponent } from './agent/agent.component';
import { DigitalBankingComponent } from './digital-banking/digital-banking.component';


@NgModule({
  declarations: [WebsiteComponent, LandingPageComponent, HomeComponent, AboutComponent, AgentComponent, DigitalBankingComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class WebsiteModule { }
