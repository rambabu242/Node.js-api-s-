import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userInfo ={
  firstName : '',
  lastName : '',
  phoneNumber : '',
  email : '' 
}
  
  constructor(private getuserservice:  UserDataService, private router: Router) { }
  
  ngOnInit(): void {
    this.getuserservice.getapi().subscribe((response: any) => { 
     console.log(response);
    //  this.firstName = response.userData.firstName;
    //  this.lastName = response.userData.lastName;
    //  this.phoneNumber = response.userData.phoneNumber;
    //  this.email = response.userData.email;
    this.userInfo = response.userData;
    });
   
  }
  delete() {
    this.getuserservice.deleteUser().subscribe((res: any) => {
      console.log(res);
    });
    this.router.navigate(['/login']);
  }
    // fisrtName =  localStorage.getItem('firstName');
    // lastName = localStorage.getItem('lastName');
    // phoneNumber = localStorage.getItem('phoneNumber');
    // email = localStorage.getItem('email');
}
