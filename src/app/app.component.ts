import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ CitiesService ]
})
export class AppComponent {
  title = 'app works!';
  placeholder = 'username';
  username = '';

  routes = [
    {
      name: 'Input',
      target: 'pages/Input'
    }
  ]

  selectedKey = 1;
  selection = [];
  errorMessage: string;

  constructor(private citiesService: CitiesService) {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCities()
                      .subscribe(
                        response => this.selection = response,
                        error =>  this.errorMessage = <any>error);
  }
}
