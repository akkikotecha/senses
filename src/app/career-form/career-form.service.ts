import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerFormService {

  fd: any;

  constructor(private http: HttpClient) { }

  addFormData(data: any) {


    let url = environment.base_url + "addCarerrsFormData";
    console.log("AK : " + JSON.stringify(data));
    return this.http.post(url, data);
  }
}
