import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyOverviewComponent } from './company-overview.component';
import { Routes, RouterModule } from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [

  {
    path: 'our-team',
    component: OurTeamComponent, pathMatch: "full"
  },

  {
    path: 'profile',
    component: ProfileDetailsComponent, pathMatch: "full"
  },
  {
    path: ':slug',
    component: CompanyOverviewComponent, pathMatch: "full"
  },
  {
    path: '',
    component: CompanyOverviewComponent,

  },

];

@NgModule({
  declarations: [CompanyOverviewComponent, OurTeamComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyOverviewModule { }
