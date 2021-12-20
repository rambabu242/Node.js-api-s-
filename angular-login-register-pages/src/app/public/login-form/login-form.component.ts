import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormService } from './login-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   
  constructor(private loginService:LoginFormService, private router: Router, private _snackBar: MatSnackBar) { 

  }
  
  ngOnInit(): void {
    const token = localStorage.getItem("Token");
    if(token){
      this.router.navigate(['/home']);
    }
  }
  onSubmit(loginForm:NgForm) {
    console.log("submitted");
    console.log(loginForm.value); 
    this.loginService.login(loginForm.value).subscribe((response:any) => {
      console.log(response);
      if(response.user_message === "login successful") {
        // alert(response.user_message);
        this._snackBar.open(response.user_message, "done");
        localStorage.setItem("Token", response.token);
        // let userData = response.user;
        // localStorage.setItem('firstName', userData.firstName);
        // localStorage.setItem('lastName', userData.lastName);
        // localStorage.setItem('phoneNumber', userData.phoneNumber);
        // localStorage.setItem('email', userData.email);
        this.router.navigate(['/home']);
      }else {
        this._snackBar.open(response.user_message, "done");
      }
    })
  }

}
