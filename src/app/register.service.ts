import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Register } from './register'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }
}

createRegister(register: Register): Observable<Object>{  
  let setURL = "http://localhost:4449/setRegister?Username="+register.Username+"&Password="+register.Password+"&email="+register.email+"&role="+register.role;
      return this.httpClient.post(`${setURL}`, register);
}