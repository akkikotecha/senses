import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  fd: any;

  constructor(private http: HttpClient) {}
  addNewsLetter(data: any) {
    let url = environment.base_url + 'addNewsLetter';
    console.log('AK : ' + JSON.stringify(data));
    return this.http.post(url, data);
  }
}
