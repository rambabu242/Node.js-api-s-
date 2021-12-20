import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  constructor(private http: HttpClient) { }
  signup(obj: any) {
   return this.http.post('http://localhost:3000/register', obj).pipe(map((response: any) => {return response}))
  }
}
