import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { seasonsURL, winnersURL } from '../constants/constants';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  //concatenate environment url
  // To get winners list by passing position 1 as parameter
  getWinnersList() {
    return this.http.get(winnersURL, {responseType: 'text'});
  }

  // To get Races list by passing year as parameter
  getRaces(year : string | null) {
    const url = environment.apiBaseUrl+year+seasonsURL;
    return this.http.get(url, {responseType: 'text'})
  }
}
