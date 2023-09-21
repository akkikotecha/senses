import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  fd: any;

  constructor(private http: HttpClient) {}
  getAllFeaturedProduct() {
    let url = environment.base_url + 'getAllFeaturedProducts';

    return this.http.get(url);
  }

  getThreeFeaturedProjects() {
    let url = environment.base_url + 'getThreeFeaturedProjects';

    return this.http.get(url);
  }

  getAllBlogs() {
    let url = environment.base_url + 'getAllBlogs';

    return this.http.get(url);
  }
}
