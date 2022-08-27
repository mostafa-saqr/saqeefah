import { Component, Input, OnInit } from '@angular/core';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

@Input() setting
get SettingTypes(){
  return SettingTypes
}
appRootUrl=environment.appRoot+'/'; 
filterSetting(settingId,property = null){
    
  if(this.setting){
  
    let selectedSetting = this.setting.filter(setting => setting.settingTypeId == settingId)
  
    if(property != null){
      return selectedSetting[0][property]
    } else {
      return selectedSetting[0]
    }
    
  }

}
  constructor() { }

  ngOnInit(): void {
  }

}
