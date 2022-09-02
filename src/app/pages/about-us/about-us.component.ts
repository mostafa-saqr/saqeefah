import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { SettingsService } from '../dashboard/setting/services/settings.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  AboutUs
  OurVision
  OurGoals
  OurStory
  ceoWord 
  ourMeeting
public ourMeetingBg
  get settingTypes(){
    return SettingTypes
  }
  constructor(public setting:SettingsService, private language:changeLanguageService,private sanitizer:DomSanitizer) { }
 getAboutSetting(){
 return this.setting.getAllsettings(this.language.getLanguageID()).subscribe((response)=>{
    if(!response.isError){
      let allSetting = response.result.data
      this.AboutUs = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.AboutUs)[0];
      this.OurVision = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.OurVision)[0];
      this.OurGoals = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.OurGoals)[0];
      this.OurStory = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.OurStory)[0];
      this.ceoWord = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.ceoWord)[0];
      this.ourMeeting = allSetting.filter((setting)=> setting.settingTypeId == SettingTypes.ourMeeting)[0];
     
        this.ourMeetingBg = this.setting.appRootUrl+this.ourMeeting.imagePath
        console.log('website setting from about us page',allSetting)
      

    }
  })
 }
  ngOnInit(): void {
    this. getAboutSetting()
    this.language.changeLanguageStatus.subscribe((data)=>{
      this. getAboutSetting()
      
    })
  }

}
