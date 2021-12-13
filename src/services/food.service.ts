import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Food } from 'models/food';
import { Category } from 'models/category';
import { Branch } from 'models/branch';
import { Carousel } from 'models/carousel';
import { Observable, of, throwError } from 'rxjs';


const apiUrl = 'https://61b1732f3c954f001722a95b.mockapi.io/api/v1/';
// const apiUrl = 'https://phoocchunam.free.beeceptor.com/';
@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${apiUrl}/category`).pipe()
  }

  getFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(`${apiUrl}/food`).pipe()
  }

  getBranch(): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>(`${apiUrl}/branch`).pipe()
  }

  getCarousel(): Observable<Carousel[]> {
    return this.httpClient.get<Carousel[]>(`${apiUrl}/carousel`).pipe()
  }
}
