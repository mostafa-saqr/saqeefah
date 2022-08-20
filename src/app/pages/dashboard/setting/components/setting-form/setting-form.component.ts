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
  iconCss = new FormControl();
  fallbackIcon = 'fas fa-user';
  submitted:boolean=false; 

  public myFormGroup: FormGroup = new FormGroup({
    settingTypeId: new FormControl(0),
    TitleEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    TitleAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionEn: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionAr: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    Image: new FormControl('', [Validators.required]),
    iconCss: new FormControl(this.iconCss),


  });
  constructor(private setting: SettingsService) {


  }

  ngOnInit(): void {

    this.initializeFormGroup();

    this.setting.getAllsettings().subscribe(res => {
      if (res) {
        console.log(res);
      }
      else {

      }
    })
  }

  onClickSubmit() {
    this.submitted=true; 
    if (this.myFormGroup.invalid) {
      return;
    }
    let setting = {
      settingTypeId: this.myFormGroup.value.settingTypeId,
      TitleEn: this.myFormGroup.value.TitleEn,
      TitleAr: this.myFormGroup.value.TitleAr,
      DescriptionEn: this.myFormGroup.value.DescriptionEn,
      DescriptionAr: this.myFormGroup.value.DescriptionAr,
      Image: this.myFormGroup.value.Image,
      iconCss: this.myFormGroup.value.iconCss,
    };


    this.setting.setSetting(setting).subscribe(
      res => {
        debugger; 
        if (res.status = true) {
          alert(':: Submitted successfully');
          this.myFormGroup.reset();
          this.submitted=false; 

        }
        else {
          alert(':: Failed');

        }

      })

  }
  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }


  initializeFormGroup() {
    this.myFormGroup.setValue({
      settingTypeId: 100,
      TitleEn: '',
      TitleAr: '',
      DescriptionEn: '',
      DescriptionAr: '',
      Image: '',
      iconCss: this.iconCss
    })
  }

}
