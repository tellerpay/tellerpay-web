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
import { FaqsComponent } from './faqs/faqs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WebsiteComponent, LandingPageComponent, HomeComponent, AboutComponent, AgentComponent, DigitalBankingComponent, FaqsComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    CarouselModule,
    FormsModule
  ]
})
export class WebsiteModule { }
