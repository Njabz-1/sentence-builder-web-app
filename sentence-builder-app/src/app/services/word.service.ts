import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private baseUrl = 'http://localhost:3000/words';

  constructor(private http: HttpClient) { }

  getWords(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
