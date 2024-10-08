import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyApiService {

  constructor(private http: HttpClient) {}
getApiPosts(): Observable<any>{
  return this.http.get('https://dummyjson.com/posts', {}); 

  }
  }
