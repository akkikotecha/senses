import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAllProjectService {

  constructor(private http: HttpClient) { }

  getThreeFeaturedProjects() {

    let url = environment.base_url + "getAllFeaturedProjectsSortBannerIndex/";
    return this.http.get(url);
  }

}

