import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KeyValuePipe } from '../pipes/key-value.pipe';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    KeyValuePipe,
    SelectComponent,
    InputComponent,
    TextareaComponent
  ],
  declarations: [
    KeyValuePipe,
    SelectComponent,
    InputComponent,
    TextareaComponent
  ],
  providers: []
})

export class BaseModule {}
