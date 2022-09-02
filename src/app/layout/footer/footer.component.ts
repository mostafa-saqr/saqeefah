import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private FB:FeedbackService,private toastr :ToastrService) { }

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
        if (!res.errors) {
          // alert(':: Submitted successfully');
          this.toastr.success(' :: Successfully Submitted ');
          this.showError=false;
          this.form.reset();
        }
        else {
          this.toastr.error(' :: Failed Submitted');
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
