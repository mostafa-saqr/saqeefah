import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showError:boolean=false;
  emailRegex=/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  spaceRegex=/^(\s+\S+\s*)*(?!\s).*$/;
  phoneregex='(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
  form: FormGroup= new FormGroup({
    id: new FormControl(0),
    name:new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex)]),
    email:new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex),Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex),Validators.pattern(this.phoneregex)]),
    message:new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex)])
  })

  constructor(private contact:ContactUsService ,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  onSubmit(){
    debugger;
    if (this.form.invalid) {
      this.showError=true;
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

        if (!res.isError) {

          this.toastr.success(' :: Successfully Sended ');
          this.showError=false;
          this.form.reset();

        }
        else {
          this.toastr.error(' :: Failed Sended ');
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
