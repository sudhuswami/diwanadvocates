import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ContactUsComponent } from './featured/contact-us/contact-us.component';
import { HomeComponent } from './featured/home/home.component';
import { JoinUsComponent } from './featured/join-us/join-us.component';
import { RejectConsentComponent } from './featured/reject-consent/reject-consent.component';

const routes: Routes = [
  { path: "rejectconsent", component: RejectConsentComponent },
  { path: "404", component: PageNotFoundComponent },
  {
    path: "", component: CommonComponent,
    children: [
      { path: "company-overview", loadChildren: () => import('./featured/company-overview/company-overview.module').then(m => m.CompanyOverviewModule) },
      { path: "services", loadChildren: () => import('./featured/services/services.module').then(m => m.ServicesModule) },
      { path: "blog", loadChildren: () => import('./featured/blog/blog.module').then(m => m.BlogModule) },
      { path: "contact-us", component: ContactUsComponent },
      { path: "join-us", component: JoinUsComponent },

      { path: "", component: HomeComponent },
      { path: "**", redirectTo: "/404" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
