import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  home() {
    this.router.navigate(['home']);
  }
  profile() {

    return this.router.navigate(['profile']);      
  }
  update() {
    return this.router.navigate(['update']);
  }
  logout() {
     localStorage.clear();
     return this.router.navigate(['login']);
  }

}
