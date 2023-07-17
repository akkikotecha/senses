import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceDocumentService {
  fd: any;

  constructor(private http: HttpClient) {}

  getResourceTypeData(id: any) {
    let url = environment.base_url + 'getResourceImage/' + id;
    console.log(url);
    return this.http.get(url);
  }
  getResourceSubTypeDataByTypeID(id: any) {
    let url = environment.base_url + 'getAllResourceSubTypeByTypeID/' + id;
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
  getResourceParticularData(id: any) {
    let url = environment.base_url + 'getAllResourceParticularData/' + id;
    console.log(url);
    return this.http.get(url);
  }
}
