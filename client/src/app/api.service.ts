import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = new Headers({'Content-Type': 'application/json'});
  //TODO: use environments to provide API url instead of this lol
  apiUrl: 'http://localhost:3000';

  constructor(private http: Http) {

  }

  public getGames(){
    return this.http.get(
      this.apiUrl + '/games',
      );
  }
}