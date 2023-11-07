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
    return this.http.get(url);
  }
  getAllResourceSubType() {
    let url = environment.base_url + 'getAllResourceSubType';
    return this.http.get(url);
  }
  getAllResourceTypeSubTypeData() {
    let url = environment.base_url + 'getResourceSubTypeDataByTypeId';
    return this.http.get(url);
  }
}
