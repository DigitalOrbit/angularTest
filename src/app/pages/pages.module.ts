import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InputPageComponent } from './input-page/input-page.component';


@NgModule({
    imports: [
        BrowserModule
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
