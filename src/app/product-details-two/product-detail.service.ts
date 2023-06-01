import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  fd: any;

  constructor(private http: HttpClient) { }
 
  getAllSubCategory(data:any)
  {

    let url = environment.base_url+"getCategoryDetailsId/"+data;
    return this.http.get(url);
  }

  

}

