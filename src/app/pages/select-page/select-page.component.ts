import { Component } from '@angular/core';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss']
})
export class SelectPageComponent {

  myLabel: string = 'My Label';
  myHelpText: string = `That's a help text`;
  myValue: number = 1;
  mySelection: Array<any> = [
    {
      'key': 1,
      'value': 'Option 1'
    },
    {
      'key': 2,
      'value': 'Option 2'
    },
    {
      'key': 3,
      'value': 'Option 3'
    }
  ];
}
