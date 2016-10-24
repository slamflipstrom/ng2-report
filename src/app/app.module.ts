import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestReportComponent } from './test-report/test-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TestReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing,
    SharedModule,
  ],
  // providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
