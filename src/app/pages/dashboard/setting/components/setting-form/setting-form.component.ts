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
  //  iconCss = new FormControl();
   iconCss = 'fas fa-user';

  submitted: boolean = false;


  public myFormGroup: FormGroup = new FormGroup({
    settingTypeId: new FormControl(0),
    TitleEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    TitleAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    iconCss: new FormControl(''),


  });
  constructor(private setting: SettingsService) {


  }

  ngOnInit(): void {

    this.initializeFormGroup();

    this.setting.getAllsettings().subscribe(res => {
      // debugger
      if (res) {
        console.log(res);
      }
      else {

      }
    })
  }

  ImageThumb: File = null
  formData: FormData = new FormData()
  onInputChange(event) {

    if (event.target.files) {
      this.ImageThumb = <File>event.target.files[0]
      console.log('file data', this.ImageThumb)
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.myFormGroup.invalid) {
      return;
    }
    let setting = {
      settingTypeId: this.myFormGroup.value.settingTypeId,
      TitleEn: this.myFormGroup.value.TitleEn,
      TitleAr: this.myFormGroup.value.TitleAr,
      DescriptionEn: this.myFormGroup.value.DescriptionEn,
      DescriptionAr: this.myFormGroup.value.DescriptionAr,
      iconCss: this.myFormGroup.value.iconCss,
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

    //this.iconCss.setValue(icon);
  }


  initializeFormGroup() {
    this.myFormGroup.setValue({
      settingTypeId: 100,
      TitleEn: '',
      TitleAr: '',
      DescriptionEn: '',
      DescriptionAr: '',
      iconCss:'fas fa-user'
    })
  }

}
