import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlaskApiService {
  constructor(private http: HttpClient) { }

  apiUrl = 'localhost:5000/api/resource/1';

  getResource() {
      return this.http.get(this.apiUrl);
  }
}
