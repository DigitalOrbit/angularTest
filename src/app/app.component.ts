import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  selection = [
    {
      id: 1,
      name: 'Frankfurt'
    },
    {
      id: 2,
      name: 'Köln'
    },
    {
      id: 3,
      name: 'Fryslan'
    }
  ]

  placeholder = 'username';
  username = '';
  city = 1;
}
