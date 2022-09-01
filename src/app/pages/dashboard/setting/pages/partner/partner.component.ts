import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { environment } from 'src/environments/environment';
import jsonDoc  from '../../models/doc';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit,AfterViewInit,OnDestroy {

  showError=false;
 ImageThumb: File = null;
 formData: FormData = new FormData();
spaceregex=/^(\s+\S+\s*)*(?!\s).*$/;
editordoc = jsonDoc;
appRootUrl=environment.appRoot+'/';
editor2: Editor;
editor3:Editor;
toolbar: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
];
html: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';
 public myFormGroup: FormGroup = new FormGroup({
   TitleEn: new FormControl('', [Validators.required]),
   TitleAr: new FormControl('', [Validators.required]),
   DescriptionEn: new FormControl(Validators.required),
   DescriptionAr: new FormControl(Validators.required),

 });
 constructor() {


 }

 ngOnInit(): void {

   this.initializeFormGroup();

 }
 ngAfterViewInit(): void{
  this.editor2 = new Editor();
  this.editor3 = new Editor();
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
  //  this.formData.append('SettingTypeId',setting.settingTypeId);




 }



 initializeFormGroup() {
   this.myFormGroup.setValue({
     TitleEn: '',
     TitleAr: '',
     DescriptionEn: '',
     DescriptionAr: '',

   })
 }


 DeleteImage()
 {

 }

 ngOnDestroy(): void {
  this.editor2.destroy();
  this.editor3.destroy();
}


}
