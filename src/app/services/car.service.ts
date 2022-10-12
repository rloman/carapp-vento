import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Car } from '../model/car';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  public create(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url, car);
  }

  public findById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.url}/${id}`);
  }

  public update(source: Car): Observable<Car> {
    return this.http.put<Car>(`${this.url}/${source.id}`, source);
  }
}
