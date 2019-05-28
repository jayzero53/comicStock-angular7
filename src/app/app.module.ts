import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComicIssueComponent } from './comic-issue/comic-issue.component';
import { ComicSupplierComponent } from './comic-supplier/comic-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComicIssueComponent,
    ComicSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
