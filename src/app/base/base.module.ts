import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    SelectComponent,
    InputComponent
  ],
  declarations: [
    SelectComponent,
    InputComponent
  ],
  providers: []
})

export class BaseModule {}
