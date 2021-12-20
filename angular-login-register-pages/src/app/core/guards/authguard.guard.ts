import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
 constructor(private router: Router) {}
  
  canActivate(): boolean{
   const token = localStorage.getItem("Token");
  if(!token) {
    this.router.navigate(['/login']);
    return false
  } 
  return true
  }   
}
