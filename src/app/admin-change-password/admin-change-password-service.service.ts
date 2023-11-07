import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminChangePasswordServiceService {
 

   
  constructor(private http: HttpClient ) {
    
  }
  ChangePassword(data:any)
  {
//  console.log("HELO "+environment.base_url);    
    let url = environment.base_url+"update_password";
    return this.http.put(url,data);
  }

}

