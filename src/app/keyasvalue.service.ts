import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class KeyasvalueService {
  //apiKEY: string = '41f14f90';
  baseURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  constructor(private http: HttpClient) {}
  public getData(ref: any): Observable<Object> {
    return this.http.get(this.baseURL + '/get?key=' + ref);
  }
  public pushData(ref: any, k: string): Observable<Object> {
    return this.http.post(this.baseURL + '/post?key=' + k + '&msg=' + ref, ref);
  }
  public createKEY(ref: any): Observable<Object> {
    return this.http.post(this.baseURL + '/new', '', {
      responseType: 'text'
    });
  }
}
