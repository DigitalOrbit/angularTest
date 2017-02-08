import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { KeyValuePipe } from '../pipes/key-value.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    SelectComponent,
    InputComponent,
    KeyValuePipe
  ],
  declarations: [
    SelectComponent,
    InputComponent,
    KeyValuePipe
  ],
  providers: []
})

export class BaseModule {}
