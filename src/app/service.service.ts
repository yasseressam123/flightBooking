import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

   //get contries
   getSlider() {
    return this.http.get('https://restcountries.com/v3.1/all');
  };
}
