import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  token = localStorage.getItem("Token");
  httpOptions ={
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
   })
  }
  constructor(private http: HttpClient) { }
  
  getapi() {
    return this.http.get('http://localhost:3000/getuser', this.httpOptions).pipe(map((response: any) => {return response} ))
   }
  deleteUser() {
    return this.http.delete('http://localhost:3000/delete', this.httpOptions).pipe(map((res: any) => {return res}))
  }
}
