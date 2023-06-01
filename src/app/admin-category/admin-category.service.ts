import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  fd: any;

  constructor(private http: HttpClient) { }
  addOrganizationData(data:any)
  {


    let url = environment.base_url+"createCategory";
    console.log("AK : "+JSON.stringify(data));
    return this.http.post(url,data);
  }

  EditOrganizationData(data:any)
  {


    let url = environment.base_url+"EditOrganizationDataAnnouncement";
    console.log("AK : "+JSON.stringify(data));
    return this.http.post(url,data);
  }

  
  organizationAnnouncement()
  {

    let url = environment.base_url+"organizationAnnouncement";
    return this.http.get(url);
  }

}

