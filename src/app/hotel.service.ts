import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hotel } from './hotel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = "http://localhost:4449/getHotel";

  constructor(private httpClient: HttpClient) { }

  getHotelsList(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }

  createhotel(hotel: Hotel): Observable<Object>{
    let setURL = "http://localhost:4449/setHotel?city_id="+hotel.city_id+"&hotel_name="+hotel.hotel_name+"&id="+hotel.id+"&price="+hotel.price+"&address="+hotel.address+"&photos="+hotel.photos+"&Review="+hotel.Review+"&Rating="+hotel.Rating;
    return this.httpClient.post(`${setURL}`, hotel);
  }
}
