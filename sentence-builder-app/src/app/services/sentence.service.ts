import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentence } from '../models/sentence.model';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {
  private baseUrl = 'http://localhost:3000/sentences';

  constructor(private http: HttpClient) { }

  getSentences(): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${this.baseUrl}`);
  }

  addSentence(sentence: string): Observable<Sentence> {
    return this.http.post<Sentence>(`${this.baseUrl}`, { sentence: sentence });
  }
}