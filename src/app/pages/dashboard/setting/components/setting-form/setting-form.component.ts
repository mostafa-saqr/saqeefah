import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss']
})
export class SettingFormComponent implements OnInit {

  @Input() collapseId: number = 1;

  @Input() SettingTypeId: number;

  @Input() SettingTypeTitle: string;

   iconCss = 'fas fa-user';
  submitted: boolean = false;
  ImageThumb: File = null
  formData: FormData = new FormData()
  showError:boolean=false;
  spaceRegex=/^(\s+\S+\s*)*(?!\s).*$/;

  constructor(private setting: SettingsService) {

  }

  public myFormGroup: FormGroup = new FormGroup({
    settingTypeId: new FormControl(0),
    TitleEn: new FormControl('',[Validators.required,Validators.pattern(this.spaceRegex)]),
    TitleAr: new FormControl('',[Validators.required,Validators.pattern(this.spaceRegex)]),
    DescriptionEn: new FormControl('',[Validators.required,Validators.pattern(this.spaceRegex)]),
    DescriptionAr: new FormControl('', [Validators.required,Validators.pattern(this.spaceRegex)]),
    iconCss: new FormControl('',[Validators.required,Validators.pattern(this.spaceRegex)]),
  });
 

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

  onInputChange(event) {

    if (event.target.files) {
      this.ImageThumb = <File>event.target.files[0]
      console.log('file data', this.ImageThumb)
    }
  }

  onClickSubmit() {
    debugger; 
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
    };
    this.formData.append('SettingImage',this.ImageThumb, this.ImageThumb.name); 
    this.formData.append('TitleAr',setting.TitleAr); 
    this.formData.append('TitleEn',setting.TitleEn); 
    this.formData.append('DescriptionAr',setting.DescriptionAr); 
    this.formData.append('DescriptionEn',setting.DescriptionEn); 
    this.formData.append('SettingTypeId',setting.settingTypeId); 
    this.formData.append('IconCss',setting.iconCss); 
        
    this.setting.setSetting(this.formData).subscribe(
      res => {
        if (res.status = true) {
          alert(':: Submitted successfully');
          this.showError=false;
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
    debugger
    this.myFormGroup.setValue({
      settingTypeId: this.SettingTypeId,
      TitleEn: '',
      TitleAr: '',
      DescriptionEn: '',
      DescriptionAr: '',
      iconCss:'fas fa-user'
    })
  }

}
