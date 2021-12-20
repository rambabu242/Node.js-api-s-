import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) { 
  }
  login(obj: any) {
   return this.http.post('http://localhost:3000/login', obj).pipe(map((response: any) => {return response} ))
  }
}
