import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { City } from './city';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  createcity(citys: City) {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:4449/getCity";

  constructor(private httpClient: HttpClient) { }

  getCity(): Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.baseURL}`);
  }

  createBooking(city: City): Observable<Object>{
    let setURL = "http://localhost:4449/setCity?name="+city.name+"&id="+city.id;
    return this.httpClient.post(`${setURL}`, city);
  }

  getCityById(id: number): Observable<City>{
    return this.httpClient.get<City>(`${this.baseURL}/${id}`);
  }

  updateCity(id: number, city: City): Observable<Object>{
    let putURL = "http://localhost:4449/updateCity?name="+city.name+"&id="+city.id;
    return this.httpClient.put(`${putURL}`, city);
  }

}
