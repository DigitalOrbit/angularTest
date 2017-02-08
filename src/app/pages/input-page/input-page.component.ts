import { Component } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent {

  myLabel: string = 'My Label';
  myPlaceholder: string = 'Please insert some text';
  myHelpText: string = `That's a help text`;
  myValue: string = '';
}
