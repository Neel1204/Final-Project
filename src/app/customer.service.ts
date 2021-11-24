import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:4449/getCustomer";

  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createBooking(customer: Customer): Observable<Object>{
    let setURL = "http://localhost:4449/setCustomer?cust_id="+customer.cust_id+"&name="+customer.name+"&id_proof="+customer.id_proof;
    return this.httpClient.post(`${setURL}`, customer);
  }

}
