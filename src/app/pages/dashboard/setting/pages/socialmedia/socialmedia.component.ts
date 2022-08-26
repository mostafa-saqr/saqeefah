import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {
  showError:boolean=false;
  spaceRegex=/^(\s+\S+\s*)*(?!\s).*$/;
  urlRegex=/^(?:(http(s)?)?(sftp)?(ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  public myFormGroup: FormGroup = new FormGroup({
   
    Facebook: new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex),Validators.pattern(this.urlRegex)]),
    Linkedin: new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex),Validators.pattern(this.urlRegex)]),
    Twitter: new FormControl('', [Validators.required, Validators.pattern(this.spaceRegex),Validators.pattern(this.urlRegex)]),
    Googleplus: new FormControl('',[Validators.required , Validators.pattern(this.spaceRegex),Validators.pattern(this.urlRegex)]),

  });

  constructor() {
    this.initializeFormGroup();
   }
  

  ngOnInit(): void {
  }
  onClickSubmit(){
     if(this.myFormGroup.invalid)
     {
      this.showError=true;
      
     }

     let socialData = {
      Facebook: this.myFormGroup.value.Facebook,
      Linkedin: this.myFormGroup.value.Linkedin,
      Twitter: this.myFormGroup.value.Twitter,
      Googleplus: this.myFormGroup.value.Googleplus,
     
    };
    console.log('media',socialData);







    
  }







  initializeFormGroup() {
    this.myFormGroup.setValue({
      Facebook: '',
      Linkedin: '',
      Twitter: '',
      Googleplus: '',
     
    })
  }


}
