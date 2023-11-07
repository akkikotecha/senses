import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminResourceSubTypeServiceService {
  fd: any;

  constructor(private http: HttpClient) {}
  SubCategory(data: any) {
    let url = environment.base_url + 'SubCategory';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }

  EditOrganizationData(data: any) {
    let url = environment.base_url + 'updateResourceSubType';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }

  getAllResourceType() {
    let url = environment.base_url + 'getAllResourceType';
    return this.http.get(url);
  }
  addResourceSubType(data: any) {
    let url = environment.base_url + 'addResourceSubType';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }
}
