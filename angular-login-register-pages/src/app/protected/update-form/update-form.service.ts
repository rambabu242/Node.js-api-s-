import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UpdateFormService {
 token = localStorage.getItem("Token");
  httpOptions ={
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
   })
  }

  constructor(private http: HttpClient) { }
  update(obj: any) {
    return this.http.put('http://localhost:3000/update', obj, this.httpOptions).pipe(map((response: any) => {return response} ))
  }
  getapi() {
    return this.http.get('http://localhost:3000/getuser', this.httpOptions).pipe(map((response: any) => {return response}))
  }
}
