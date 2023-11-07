import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  fd: any;

  constructor(private http: HttpClient) { }

  getAllResourceType() {
    let url = environment.base_url + 'getAllResourceType';
    console.log(url);
    return this.http.get(url);
  }
}
