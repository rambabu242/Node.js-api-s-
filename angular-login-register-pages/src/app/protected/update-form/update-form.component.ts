import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data/user-data.service';
import { UpdateFormService } from './update-form.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  userInfo ={
    firstName : '',
    lastName : '',
    phoneNumber : '',
    email : '' 
  }
  constructor(private updateservice: UpdateFormService, private router: Router,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const token = localStorage.getItem("Token");
    if(token){
      this.router.navigate(['/update']);
    }
this.updateservice.getapi().subscribe((response: any) => {console.log(response);
  this.userInfo = response.userData;
})
 
}
  onSubmit(updateForm: NgForm) {
      console.log(updateForm.value);
      this.updateservice.update(updateForm.value).subscribe((response: any) => {
        console.log(response);
        if(response.user_message === 'updated successfully') {
          this._snackBar.open(response.user_message, "done");
          //  const user = response.updatedData;
          //  localStorage.setItem('firstName', user.firstName);
          //  localStorage.setItem('lastName', user.lastName);
          //  localStorage.setItem('phoneNumber', user.phoneNumber);
           this.userInfo = response.updatedData;
           this.router.navigate(['/update']);
        }else {
          this._snackBar.open(response.user_message, "done");
        }
      })
  }
}
