import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getGallery() {
    return this.http.get('https://ljifg6p8cd.execute-api.us-east-1.amazonaws.com/production/matific-test-gallery-activities');
  }
}
