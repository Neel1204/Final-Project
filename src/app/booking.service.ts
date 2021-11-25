import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

 
  private baseURL = "http://localhost:4449/getBooking";

  constructor(private httpClient: HttpClient) {
   }

  
  getBookingList(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }

  createBooking(booking: Booking): Observable<Object>{  
    let setURL = "http://localhost:4449/setBooking?Room_no="+booking.Room_no+"&booking_id="+booking.booking_id+"&start_date="+booking.start_date+"&end_date="+booking.end_date+"&hotel_id="+booking.hotel_id+"&customer_id="+booking.customer_id;
        return this.httpClient.post(`${setURL}`, booking);
  }

  getBookingById(id: number): Observable<Booking>{
    return this.httpClient.get<Booking>(`${this.baseURL}/${id}`);
  }

  updateBooking(id: number, booking: Booking): Observable<Object>{
    let putURL = "http://localhost:4449/updateBooking?Room_no="+booking.Room_no+"&booking_id="+booking.booking_id+"&start_date="+booking.start_date+"&end_date="+booking.end_date+"&hotel_id="+booking.hotel_id+"&customer_id="+booking.customer_id;
    return this.httpClient.put(`${putURL}`, booking);
  }
  

}
