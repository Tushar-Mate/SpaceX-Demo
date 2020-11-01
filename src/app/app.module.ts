import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { ProgramDisplayComponent } from './components/program-display/program-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FiltersComponent,
    ProgramCardComponent,
    ProgramDisplayComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
