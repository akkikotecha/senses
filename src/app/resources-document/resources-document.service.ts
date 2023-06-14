import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceDocumentService {
  fd: any;
  id = localStorage.getItem('resourceTypeId');
  constructor(private http: HttpClient) {}

  getResourceTypeData() {
    let url = environment.base_url + 'getResourceImage/' + this.id;
    console.log(url);
    return this.http.get(url);
  }
  getResourceSubTypeDataByTypeID() {
    let url = environment.base_url + 'getAllResourceSubTypeByTypeID/' + this.id;
    console.log(url);
    return this.http.get(url);
  }
  getResourceImageDataBySubTypeID(id: string) {
    let url = environment.base_url + 'getResourceImageDataBySubTypeID/' + id;
    console.log(url);
    return this.http.get(url);
  }
}
