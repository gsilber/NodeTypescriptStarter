import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private headers = new Headers({'Content-Type': 'application/json'});
  //TODO: use environments to provide API url instead of this lol
  //apiUrl: 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

  public getGames(){
    console.log('inside API service');
    return this.http.get(
      'http://localhost:3000/games',
      );
  }
}