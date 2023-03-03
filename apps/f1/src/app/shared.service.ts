import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seasonsURL, winnersURL } from '../constants/constants';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  //Note to the reviewers
  // Not created interfaces as the response is very clumsy
  // Is is currently TO DO

  //concatenate environment url
  // To get winners list by passing position 1 as parameter
  getWinnersList(): Observable<string> {
    return this.http.get(winnersURL, {responseType: 'text'});
  }

  // To get Races list by passing year as parameter
  getRaces(year : string): Observable<string> {
    const url = environment.apiBaseUrl+year+seasonsURL;
    return this.http.get(url, {responseType: 'text'})
  }
}
