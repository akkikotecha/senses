import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor(private http: HttpClient) { }

  getHomeBanner()
  {

    let url = environment.base_url+"getHomeBanner/";
    return this.http.get(url);
  }

}
