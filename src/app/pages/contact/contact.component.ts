import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   
  emailRegex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  
  form: FormGroup= new FormGroup({ 
    id: new FormControl(0),
    name:new FormControl(''),
    email:new FormControl('',Validators.pattern(this.emailRegex)),
    phone: new FormControl(''),
    message:new FormControl('')
  })

  constructor(private contact:ContactUsService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

   
  onSubmit(){
    debugger;
    if (this.form.invalid) {
      return;
    }

    let contact = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      message: this.form.value.message,
    
    };

        
    this.contact.setContact(contact).subscribe(
      res => {
        if (res.status = true) {
          alert(':: Submitted successfully');
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
      name:'',
      email:'',
      phone:'',
      message:''
    })
  }

}
