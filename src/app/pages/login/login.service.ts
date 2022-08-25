import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { APICallerService } from 'src/app/shared/services/apicaller.service';
import { ILoginview } from './Model/ILoginview';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   constructor(private aPICallerService:APICallerService ) { }

   login(data:ILoginview ):Observable<any>
   {
      
     return this.aPICallerService.post('api/Admin/Login',data,true);
     
   }


  form: FormGroup = new FormGroup({
  
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),

  });

  initializeFormGroup(){
    this.form.setValue({ 
      userName: '',
      passWord: '',
    

    })
  }

}
