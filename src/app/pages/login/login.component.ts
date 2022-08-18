import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide=true;

  loginForm:FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })



  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   

  }


     

  onSubmit() {
     
       this.router.navigateByUrl("/dashboard"); 
   
  }
}
