import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupFormService } from './signup-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private signupService: SignupFormService, private router: Router, private _snackBar: MatSnackBar) { }

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'phoneNumber' : new FormControl(null, Validators.required),
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      'password' : new FormControl(null,Validators.required),
    });
  }
  onSubmit(data: FormGroup) {
    console.log(this.signupForm.value);
    this.signupService.signup(data.value).subscribe((response: any) => {
      console.log(response);
      if(response.user_message) {
        this._snackBar.open(response.user_message, "done");
      }else{
        this._snackBar.open(response.user_message, "done");
      }
    })
    this.router.navigate(['/login']);
  }

}
