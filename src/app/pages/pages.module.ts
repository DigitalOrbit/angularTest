import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BaseModule } from '../base/base.module';
import { InputPageComponent } from './input-page/input-page.component';
import { SelectPageComponent } from './select-page/select-page.component';

@NgModule({
    imports: [
        BrowserModule,
        BaseModule,
        FormsModule
    ],
    exports: [
        InputPageComponent,
        SelectPageComponent
    ],
    declarations: [
        InputPageComponent,
        SelectPageComponent
    ],
    providers: []
})

export class PagesModule { }
