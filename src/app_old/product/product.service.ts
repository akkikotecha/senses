import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  fd: any;

  constructor(private http: HttpClient) { }
 
  getAllCategory()
  {

    let url = environment.base_url+"getAllCategory";
    return this.http.get(url);
  }

  

}



