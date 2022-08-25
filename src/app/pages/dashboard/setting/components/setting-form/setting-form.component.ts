import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss']
})
export class SettingFormComponent implements OnInit {

  @Input() collapseId: number = 1;
  @Input('sectionTitle') sectionTitle :string =' ';
  showError=false;
   iconCss = 'fas fa-info';
  submitted: boolean = false;
  ImageThumb: File = null;
  formData: FormData = new FormData();

  public myFormGroup: FormGroup = new FormGroup({
    settingTypeId: new FormControl(0),
    TitleEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    TitleAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    Image:new FormControl('',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    iconCss: new FormControl('',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    


  });
  constructor(private setting: SettingsService) {


  }

  ngOnInit(): void {

    this.initializeFormGroup();


    this.setting.getAllsettings().subscribe(res => {
      // debugger
      if (res) {
        console.log('restttt:' ,res);
      }
      else {

      }
    })
  }


  onInputChange(event) {

    if (event.target.files) {

      this.ImageThumb = <File>event.target.files[0]
      console.log('file data', this.ImageThumb)
    }
  }

  onClickSubmit() {
    this.submitted = true;
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
      iconCss: this.myFormGroup.value.iconCss,
      Image:this.myFormGroup.value.Image,
    };
    this.formData.append('SettingImage',this.ImageThumb, this.ImageThumb.name); 
    this.formData.append('TitleAr',setting.TitleAr); 
    this.formData.append('TitleEn',setting.TitleEn); 
    this.formData.append('DescriptionAr',setting.DescriptionAr); 
    this.formData.append('DescriptionEn',setting.DescriptionEn); 
    this.formData.append('SettingTypeId',setting.settingTypeId); 
    this.formData.append('SettingIcon',setting.iconCss); 

        

    this.setting.setSetting(this.formData).subscribe(
      res => {
        debugger;
        console.log(res); 
        if (res.status = true) {
          alert(':: Submitted successfully');
          this.myFormGroup.reset();
          this.submitted = false;

        }
        else {
          alert(':: Failed');

        }

      })

  }
  onIconPickerSelect(icon: string): void {
  this.iconCss=icon;
  this.myFormGroup.controls['iconCss'].setValue(icon);
  }


  initializeFormGroup() {
    this.myFormGroup.setValue({
      settingTypeId: 100,
      TitleEn: '',
      TitleAr: '',
      DescriptionEn: '',
      DescriptionAr: '',
      Image:'',
      iconCss:'fas fa-user'
    })
  }

}
