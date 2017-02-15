import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-page',
  templateUrl: './textarea-page.component.html',
  styleUrls: ['./textarea-page.component.scss']
})
export class TextareaPageComponent {

  myLabel: string = 'My Label';
  myPlaceholder: string = 'Please insert some text';
  myHelpText: string = `That's a help text`;
  myValue: string = '';
  myRows: number = 10;
  myCols: number = 5;

}
