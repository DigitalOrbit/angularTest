import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes, appRoutingProviders } from './app.routing';

import { BaseModule } from './base/base.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeyValuePipe } from './pipes/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BaseModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
