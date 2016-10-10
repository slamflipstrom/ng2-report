import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeAdapter } from '@angular/upgrade';
import { ReportModule } from './report/report.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { routing, appRoutingProviders } from './app.routing';

// var adapter = new UpgradeAdapter();
// var app = angular.module('myApp', []);

// adapter.bootstrap(document.body, ['myApp']);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing,
    ReportModule
  ],
  // providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
