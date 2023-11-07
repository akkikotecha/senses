import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeatureProductShowDetailService {

  constructor(private http: HttpClient) { }

  getFeaturedProjectsDetails(id:any)
  {

    let url = environment.base_url+"getFeaturedProjectsDetails/"+id;
    return this.http.get(url);
  }

}
