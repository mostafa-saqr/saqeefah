import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:string;
   email:string;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.user=this.auth.getUsername();
    this.email=this.auth.getUseremail();
  }

  logout(){

    this.auth.logoutUser();
    this.router.navigateByUrl('/login');

  }

}
