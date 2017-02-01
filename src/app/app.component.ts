import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';
import { appRoutes } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CitiesService]
})
export class AppComponent {
  title = 'app works!';
  placeholder = 'username';
  username = '';
  routes: any;

  selectedKey = 1;
  selection = [];
  errorMessage: string;

  constructor(private citiesService: CitiesService) {
    this.getCities();
    this.routes = appRoutes;
  }

  getCities() {
    this.citiesService.getCities()
      .subscribe(
      response => this.selection = response,
      error => this.errorMessage = <any>error);
  }
}
