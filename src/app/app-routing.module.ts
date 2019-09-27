import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignMeasurementComponent } from './campaign-measurement/campaign-measurement.component';
import { TargetAudienceComponent } from './target-audience/target-audience.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'target_audience', component: TargetAudienceComponent },
  { path: 'campaign_measurement', component: CampaignMeasurementComponent },
  { path: 'landing_page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
