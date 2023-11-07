import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogAndNewsShowDetailsService {

  constructor(private http: HttpClient) { }

  getBlogsDetails(id: any) {

    let url = environment.base_url + "getBlogsDetails/" + id;
    return this.http.get(url);
  }

  getBlogsDetailsName(id: any) {

    let url = environment.base_url + "getBlogsDetailsName/" + id;
    return this.http.get(url);
  }


}

