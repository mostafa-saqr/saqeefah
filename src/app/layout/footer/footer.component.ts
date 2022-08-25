import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  showError:boolean=false;
  spaceRegex=/^(\s+\S+\s*)*(?!\s).*$/;
  emailRegex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

  form:FormGroup=new FormGroup({
    id:new FormControl(0), 
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.spaceRegex)]),
    subject: new FormControl('',[Validators.required,Validators.pattern(this.spaceRegex)]),
  })

  constructor(private FB:FeedbackService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

   
  onSubmit(){
    debugger;
    if (this.form.invalid) {

      this.showError=true;
      return;
    }

    let feedback = {
      email: this.form.value.email,
      subject: this.form.value.subject,
    
    };


    console.log(feedback)
        
    this.FB.setFeedback(feedback).subscribe(
      res => {
        if (res.status = true) {
          alert(':: Submitted successfully');
          this.showError=false;
          this.form.reset();
          // this.submitted = false;
        }
        else {
          alert(':: Failed');
        }

      })
    
    
  }


  initializeForm(){
    this.form.setValue({
      id:0,
      email:'',
      subject:'',
    })
  }

}
