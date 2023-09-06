import { Injectable } from '@angular/core';
 
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminCarerrsService {

  constructor(private http: HttpClient) { }
  createCareer(data: any) {
    let url = environment.base_url + 'addCareerJob';
    // console.log("AK : "+JSON.stringify(data));
    return this.http.post(url, data);
  }
  EditCareer(data: any) {
    let url = environment.base_url + 'EditCareerJob';
    // console.log("AK : "+JSON.stringify(data));
    return this.http.post(url, data);
  }
 
}
