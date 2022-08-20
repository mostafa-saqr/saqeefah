import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Setting } from '../Model/setting';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
   iconCss = new FormControl();
  
  myFormGroup: FormGroup= new FormGroup({
    settingTypeId: new FormControl(0),
    TitleEn: new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    TitleAr: new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionEn: new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    DescriptionAr: new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    Image: new FormControl('',[Validators.required]),
    Icon: new FormControl(this.iconCss),
 

  });
  constructor(private setting :SettingsService) { }

  ngOnInit(): void {
    //this.myFormGroup = new FormGroup({iconCss: this.Icon});

    this.setting.getAllsettings().subscribe(res=>{
      if(res)
      {
       console.log(res);
      }
      else{
       
      }
  })
}

  onClickSubmit(){
    // this.myFormGroup.controls['TitleEn'].setValue();
    // this.myFormGroup.controls['TitleAr'].setValue();
    // this.myFormGroup.controls['DescriptionEn'].setValue();
    // this.myFormGroup.controls['DescriptionAr'].setValue()
    // this.myFormGroup.controls['ImageList'].setValue();
    // this.myFormGroup.controls['IconList'].setValue();


    if(this.myFormGroup.invalid){
     
    return;
    }


let setting={
  settingTypeId:this.myFormGroup.value.settingTypeId,
  TitleEn:this.myFormGroup.value.TitleEn,
  TitleAr: this.myFormGroup.value.TitleAr,
  DescriptionEn: this.myFormGroup.value.DescriptionEn,
  DescriptionAr: this.myFormGroup.value.DescriptionAr,
  Image: this.myFormGroup.value.Image,
  Icon: this.myFormGroup.value.Icon,
 
  
};


this.setting.setSetting(setting).subscribe(
  res=>{
    if(res.status=true)
    {
       alert(':: Submitted successfully');
       this.myFormGroup.reset();

    }
    else{
      alert(':: Failed');

    }
  
  })
  
 }
 onIconPickerSelect(icon: string): void {
  this.iconCss.setValue(icon);
}

}
