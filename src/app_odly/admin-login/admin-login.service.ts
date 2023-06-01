import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  constructor(private http: HttpClient) {
    
  }
  AuthLogin(data:any)
  {
//  console.log("HELO "+environment.base_url);    
    let url = environment.base_url+"login";
    return this.http.post(url,data);
  }

}
