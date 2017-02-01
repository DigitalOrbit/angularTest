import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { BaseModule } from '../base/base.module';
import { InputPageComponent } from './input-page/input-page.component';


@NgModule({
    imports: [
        BrowserModule,
        BaseModule,
        FormsModule
    ],
    exports: [
        InputPageComponent
    ],
    declarations: [
        InputPageComponent
    ],
    providers: []
})

export class PagesModule { }
