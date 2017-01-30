import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseModule } from './base/base.module';

import { AppComponent } from './app.component';
import { KeyValuePipe } from './pipes/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
