import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EldenringapiserviceService {

  ashesOfWarApiUrl = "https://eldenring.fanapis.com/api/ashes"

  getAshesOfWar(): Observable<any>{
    return this.http.get(this.ashesOfWarApiUrl)
  }
  
  constructor(private http: HttpClient) { }
}
