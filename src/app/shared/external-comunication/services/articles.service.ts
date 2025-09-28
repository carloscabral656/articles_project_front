import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get('');
  }
}
