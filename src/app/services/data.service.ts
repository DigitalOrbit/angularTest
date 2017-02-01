import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  usersUrl = 'assets/data/user.json';

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
