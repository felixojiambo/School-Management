import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';
  private collectionsUrl = 'https://api.example.com/collections';
  constructor(private http: HttpClient) { }

  getDashboardData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  
  getCollections(): Observable<any[]> {
    return this.http.get<any[]>(this.collectionsUrl)
}
