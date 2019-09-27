import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TargetAudienceComponent } from './target-audience/target-audience.component';
import { CampaignMeasurementComponent } from './campaign-measurement/campaign-measurement.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetAudienceComponent,
    CampaignMeasurementComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    MatTableModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
