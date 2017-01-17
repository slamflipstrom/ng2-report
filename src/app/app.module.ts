import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TestReportComponent } from './test-report/test-report.component';
import { LazyReportComponent } from './lazy-report/lazy-report.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/test-report', pathMatch: 'full' },
  { path: 'test-report', component: TestReportComponent },
  { path: 'lazy-report', component: LazyReportComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TestReportComponent,
    LazyReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
