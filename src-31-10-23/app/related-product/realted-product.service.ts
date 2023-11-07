import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RealtedProductService {

  fd: any;

  constructor(private http: HttpClient) { }
  SubCategory(data: any) {


    let url = environment.base_url + "SubCategory";
    console.log("AK : " + JSON.stringify(data));
    return this.http.post(url, data);
  }

  EditOrganizationData(data: any) {


    let url = environment.base_url + "EditOrganizationDataAnnouncement";
    console.log("AK : " + JSON.stringify(data));
    return this.http.post(url, data);
  }


  getAllCategory() {

    let url = environment.base_url + "getAllCategory";
    return this.http.get(url);
  }



}



