import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  showError=false;
 ImageThumb: File = null;
 formData: FormData = new FormData();
spaceregex=/^(\s+\S+\s*)*(?!\s).*$/;

 public myFormGroup: FormGroup = new FormGroup({
   settingTypeId: new FormControl(0),
   TitleEn: new FormControl('', [Validators.required, Validators.pattern(this.spaceregex)]),
   TitleAr: new FormControl('', [Validators.required, Validators.pattern(this.spaceregex)]),
   DescriptionEn: new FormControl('', [Validators.required, Validators.pattern(this.spaceregex)]),
   DescriptionAr: new FormControl('', [Validators.required, Validators.pattern(this.spaceregex)]),
   Image:new FormControl('',[Validators.required, Validators.pattern(this.spaceregex)]),
  
   


 });
 constructor() {


 }

 ngOnInit(): void {

   this.initializeFormGroup();

 }


 onInputChange(event) {

   if (event.target.files) {

     this.ImageThumb = <File>event.target.files[0]
     console.log('file data', this.ImageThumb)
   }
 }

 onClickSubmit() {
   if (this.myFormGroup.invalid) {
     this.showError=true;
     return;
   }
   let setting = {
     settingTypeId: this.myFormGroup.value.settingTypeId,
     TitleEn: this.myFormGroup.value.TitleEn,
     TitleAr: this.myFormGroup.value.TitleAr,
     DescriptionEn: this.myFormGroup.value.DescriptionEn,
     DescriptionAr: this.myFormGroup.value.DescriptionAr,
     Image:this.myFormGroup.value.Image,
   };
   this.formData.append('SettingImage',this.ImageThumb, this.ImageThumb.name); 
   this.formData.append('TitleAr',setting.TitleAr); 
   this.formData.append('TitleEn',setting.TitleEn); 
   this.formData.append('DescriptionAr',setting.DescriptionAr); 
   this.formData.append('DescriptionEn',setting.DescriptionEn); 
   this.formData.append('SettingTypeId',setting.settingTypeId); 
   

      

 }
 


 initializeFormGroup() {
   this.myFormGroup.setValue({
     settingTypeId: 100,
     TitleEn: '',
     TitleAr: '',
     DescriptionEn: '',
     DescriptionAr: '',
     Image:'',
    
   })
 }



}
