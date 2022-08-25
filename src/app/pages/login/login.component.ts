import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ILoginview } from './Model/ILoginview';
import { IUser } from './Model/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide=true;
  showError=false;
  user = <IUser>{}
 error:any;

  constructor(private router: Router,private titleService :Title, public service :LoginService) {
    this.titleService.setTitle("Saqeefa | Login"); 

    
     }

  ngOnInit(): void {
   
    // let token = localStorage.getItem("token");

    // if (token != "undefined" || token != null) 
    // {
    //     this.router.navigateByUrl('/dashboard')
      
    // } 
  }

 
 onSubmit(){
 if(this.service.form.valid)
 {
   
    let loginview :ILoginview =
    {
     email: this.service.form.controls['userName'].value,
     passWord : this.service.form.controls['passWord'].value,
    }
   this.service.login(loginview).subscribe(res=>{
    if(res.status==true){
    this.user=res;
    this.error=this.user.error;
    console.log( this.user);
    console.log(this.error);
    if(this.user.token!== "undefined" || this.user.token !== null)
    
   {
      localStorage.setItem('token',this.user.token);
      localStorage.setItem('userName',this.user.userName);
     this.router.navigateByUrl('/dashboard');
   
   }
  }
  else{
    this.hide=false;

  }

     
   },
   error=>{
    this.hide=false ;}
   );
 }
 else{
  this.showError=true;

 }
}
}
