import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProductDetailService {

  fd: any;

  constructor(private http: HttpClient) { }
  CategoryDetailAdd(data:any)
  {


    let url = environment.base_url+"CategoryDetailAdd";
    console.log("AK : "+JSON.stringify(data));
    return this.http.post(url,data);
  }

  EditOrganizationData(data:any)
  {


    let url = environment.base_url+"EditOrganizationDataAnnouncement";
    console.log("AK : "+JSON.stringify(data));
    return this.http.post(url,data);
  }

  
  getAllCategory()
  {

    let url = environment.base_url+"getSubCategories";
    return this.http.get(url);
  }

  getSubCategory(CategoryId:any)
  {

    let url = environment.base_url+"getSubCategory";
    return this.http.post(url,CategoryId);
  }

  getSUbCategoryId(CategoryId:any)
  {

    let url = environment.base_url+"getSUbCategoryIdPass";
    return this.http.post(url,CategoryId);
  }

  getSUbCategoryIdPass(id:any)
  {

    let url = environment.base_url+"getSUbCategoryIdPass/"+id;
    return this.http.get(url);
  }

  


  

  

}



