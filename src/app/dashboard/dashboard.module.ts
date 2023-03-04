import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { WebsitesComponent } from './websites/websites.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    WebsitesComponent,
    PricingComponent,
    HelpComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
