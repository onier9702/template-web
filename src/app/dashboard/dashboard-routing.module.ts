import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsitesComponent } from './websites/websites.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  { 
    path: '', 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'websites', component: WebsitesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'help', component: HelpComponent },

      { path: '**', redirectTo: 'home' }

    ]
   }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
