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
  getAllResourceDataByResourceSubIdFilter(
    categoryId: any,
    subCategoryId: any,
    resourceSubId: any
  ) {
    let url =
      environment.base_url +
      'getResourceImageDataByCategoryProductByResourceSubId/' +
      categoryId +
      '/' +
      subCategoryId +
      '/' +
      resourceSubId;
    return this.http.get(url);
  }
  getResourceImageDataBySubTypeID(id: string) {
    let url = environment.base_url + 'getResourceImageDataBySubTypeID/' + id;
    console.log(url);
    return this.http.get(url);
  }
  getResourceAllCommonData() {
    let url = environment.base_url + 'getAllResourceCommonData/';
    console.log(url);
    return this.http.get(url);
  }
  getResourceSubTypeCommonData(id: string) {
    let url =
      environment.base_url + `getResourceImageDataByResourceSubId/${id}`;
    console.log(url);
    return this.http.get(url);
  }
  getResourceTypeData(id: any) {
    let url =
      environment.base_url + 'getResourceImage/' + '648ac68f3b5871e6e15ed344';
    console.log(url);
    return this.http.get(url);
  }
  getResourceParticularData(id: any) {
    let url =
      environment.base_url + 'getAllResourceParticularData/' + id;
    console.log(url);
    return this.http.get(url);
  }
}
