import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  fd: any;

  constructor(private http: HttpClient) {}

  getAllSubCategory(data: any) {
    let url = environment.base_url + 'getCategoryDetailsId/' + data;
    return this.http.get(url);
  }

  // (data:any)
  // {

  //   let url = environment.base_url+"getsubproductget/"+data;
  //   return this.http.get(url);
  // }

  getsubproductget(data: any) {
    let url = environment.base_url + 'getsubproductget';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }

  getAllResourceDataByFilter(
    categoryId: any,
    subCategoryId: any,
    resourceId: any
  ) {
    let url =
      environment.base_url +
      'getResourceImageDataByCategoryProduct/' +
      categoryId +
      '/' +
      subCategoryId +
      '/' +
      resourceId;
    return this.http.get(url);
  }
  getResourceImageDataBySubTypeID(id: string) {
    let url = environment.base_url + 'getResourceImageDataBySubTypeID/' + id;
    console.log(url);
    return this.http.get(url);
  }
}
