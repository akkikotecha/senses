import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeBannerService {
  fd: any;

  constructor(private http: HttpClient) {}
  createHomeBanner(data: any) {
    let url = environment.base_url + 'createHomeBanner';
    // console.log("AK : "+JSON.stringify(data));
    return this.http.post(url, data);
  }

  EditHomeBannerData(data: any) {
    let url = environment.base_url + 'EditHomeBannerData';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }

  getAllCategory() {
    let url = environment.base_url + 'getAllCategory';
    return this.http.get(url);
  }
  getAllSubCategory() {
    let url = environment.base_url + 'getSubCategories';
    return this.http.get(url);
  }
}
