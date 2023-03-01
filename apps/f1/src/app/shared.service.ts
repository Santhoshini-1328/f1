import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  //concatenate environment url
  // To get winners list by passing position 1 as parameter
  getWinnersList() {
    return this.http.get(environment.apiBaseUrl+"driverStandings/1.json", {responseType: 'text'});
  }

  // To get Races list by passing year as parameter
  getRaces(year : string | null) {
    return this.http.get(environment.apiBaseUrl+year+"/results/1.json", {responseType: 'text'})
  }
}
