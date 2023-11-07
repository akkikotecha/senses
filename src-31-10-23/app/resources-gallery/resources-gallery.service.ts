import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceGalleryService {
  fd: any;
  id = localStorage.getItem('resourceTypeId');
  constructor(private http: HttpClient) { }

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
  getAllSubCategory(id: string) {
    let url = environment.base_url + 'getSubCategoryIdData/' + id;
    return this.http.get(url);
  }
  getAllCategory() {
    let url = environment.base_url + 'getAllCategory';
    return this.http.get(url);
  }
  getResourceImageDataByCategoryProductBTSPROJECT() {
    let url = environment.base_url + 'getResourceImageDataByCategoryProductBTSPROJECT';
    console.log(url);
    return this.http.get(url);
  }
  getAllResourceDataByFilter(
    categoryId: any,
    setCategoryId: any,
    resourceId: any
  ) {
    let url =
      environment.base_url +
      'getResourceImageDataByCategoryProduct/' +
      categoryId +
      '/' +
      setCategoryId +
      '/' +
      resourceId;
    return this.http.get(url);
  }
  getAllResourceDataByCategoryFilter(categoryId: any, resourceId: any) {
    let url =
      environment.base_url +
      'getResourceImageDataByCategory/' +
      categoryId +
      '/' +
      resourceId;
    return this.http.get(url);
  }


}
