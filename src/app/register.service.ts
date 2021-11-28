import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Register } from './register'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  createRegister(registers: Register) : Observable<Object>{  
    let setURL = "http://localhost:4449/setRegister?Username="+registers.Username+"&pwd="+registers.pwd+"&email="+registers.email+"&role="+registers.Role;
        return this.httpClient.post(`${setURL}`, registers);
  }

  constructor(private httpClient: HttpClient) { }
}