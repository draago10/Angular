import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d2c5eb0fa7c143ab982140f6673633bc"
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d2c5eb0fa7c143ab982140f6673633bc"
  businessNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2c5eb0fa7c143ab982140f6673633bc"
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d2c5eb0fa7c143ab982140f6673633bc"
  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl)
  }

  techNews(): Observable<any> {
    return this.http.get(this.techNewsApiUrl)
  }

  businessNews(): Observable<any> {
    return this.http.get(this.businessNewsApiUrl)
  }

  sportNews(): Observable<any> {
    return this.http.get(this.sportsApiUrl)
  }

  constructor(private http: HttpClient) { 

  }
}
