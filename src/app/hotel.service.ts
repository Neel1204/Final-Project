import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hotel } from './hotel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = "http://localhost:4449/getHotel";
  private deleteURL = "http://localhost:4449/deleteHotel";
  constructor(private httpClient: HttpClient) { }

  getHotelsList(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }

  createhotel(hotel: Hotel): Observable<Object>{
    let setURL = "http://localhost:4449/setHotel?city_id="+hotel.city_id+"&hotel_name="+hotel.hotel_name+"&id="+hotel.id+"&price="+hotel.price+"&address="+hotel.address+"&photos="+hotel.photos+"&Review="+hotel.Review+"&Rating="+hotel.Rating;
    return this.httpClient.post(`${setURL}`, hotel);
  }

  getHotelById(id: number): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${id}`);
  }

  updateHotel(id: number, hotel: Hotel): Observable<Object>{
    let putURL = "http://localhost:4449/updateHotel?city_id="+hotel.city_id+"&hotel_name="+hotel.hotel_name+"&id="+hotel.id+"&price="+hotel.price+"&address="+hotel.address+"&photos="+hotel.photos+"&Review="+hotel.Review+"&Rating="+hotel.Rating;
    return this.httpClient.put(`${putURL}`, hotel);
  }

  deleteHotel(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}
