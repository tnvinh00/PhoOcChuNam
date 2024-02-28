import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacebookService {
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<string[]> {
    // return this.httpClient.get<Branch[]>(`${apiUrl}/branch`).pipe()
    return this.httpClient.get<string[]>(`assets/mockData/posts.json`).pipe();
  }
}
