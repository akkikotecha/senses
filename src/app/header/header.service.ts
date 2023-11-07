import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) { }

  searchBar(string: string) {
    let url = environment.base_url + `search?keyword=${string}`;
    return this.http.get(url);
  }
}
