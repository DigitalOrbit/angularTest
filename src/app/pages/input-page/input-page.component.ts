import { Component } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent {

  myLabel: string = 'Mein Label';
  myPlaceholder: string = 'Bitte etwas eingeben';
  mySmallText: string = 'Das ist ein Hinweis';
  myValue: string = '';
}
