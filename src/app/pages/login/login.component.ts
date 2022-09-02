import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  constructor(private router: Router,private titleService :Title,private loginService:LoginService) {
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
     passWord : this.form.controls['password'].value,
    }
    this.loginService.login(loginview).subscribe(res=>{
      if(!res.isError)
      {
        localStorage.setItem("token",res.result.data.token);
        localStorage.setItem("auth_data",JSON.stringify(res.result));

        this.router.navigateByUrl('/dashboard');
      }
    })
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
