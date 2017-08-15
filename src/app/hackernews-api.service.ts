import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`);
  }

  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`);
  }
}
