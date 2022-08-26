import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide=true;
  showError=false;
  // user = <IUser>{}
  form:FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

 
 error:any;

  constructor(private router: Router,private titleService :Title) {
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
 if(this.form.valid)
 {
   
    let loginview =
    {
     email: this.form.controls['userName'].value,
     passWord : this.form.controls['passWord'].value,
    }
  //  this.service.login(loginview).subscribe(res=>{
  //   if(res.status==true){
  //   this.user=res;
  //   this.error=this.user.error;
  //   console.log( this.user);
  //   console.log(this.error);
  //   if(this.user.token!== "undefined" || this.user.token !== null)
    
  //  {
  //     localStorage.setItem('token',this.user.token);
  //     localStorage.setItem('userName',this.user.userName);
     this.router.navigateByUrl('/dashboard');
   
  //  }
  }
  else{
    this.hide=false;

  }

     
  //  },
  //  error=>{
  //   this.hide=false ;}
  //  );
 }
//  else{
//   this.showError=true;

//  }
// }
}
