import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerService {


  constructor(private http: HttpClient) { }
  GetCareer() {
    let url = environment.base_url + 'CareerJob';
    // console.log("AK : "+JSON.stringify(data));
    return this.http.get(url);
  }


}
