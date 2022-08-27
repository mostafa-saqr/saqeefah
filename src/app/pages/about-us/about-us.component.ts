import { Component, OnInit } from '@angular/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { environment } from 'src/environments/environment';
import { ISettingType } from '../dashboard/setting/models/settingType.interface';
import { SettingsService } from '../dashboard/setting/services/settings.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  appRootUrl=environment.appRoot+'/'; 
  public stingTypes:Array<ISettingType>; 
  websiteSetting=[]
  projectList = []
  AllProjects = []
  projectsForSale =[]
  projectsForRent = []
  constructor(private generalService:GenaricService, private projects:ProjectAndListService,
    private language:changeLanguageService, private siteSetting:SettingsService) {
   

  
  }
  get SettingTypes(){
    return SettingTypes
  }
  filterSetting(settingId,property = null){
    
    if(this.websiteSetting){
    
      let selectedSetting = this.websiteSetting.filter(setting => setting.settingTypeId == settingId)
    
      if(property != null){
        return selectedSetting[0][property]
      } else {
        return selectedSetting[0]
      }
      
    }

  }
  public getSettingTypes() {

    this.siteSetting.getAllsettingsType().subscribe(r => {
      
     
      if(!r.isError){
       this.stingTypes= r.result["data"];
       console.log('settingTypes', this.stingTypes);
      }

    });
  }
  getWebsiteSetting(){
    this.siteSetting.getAllsettings(this.language.getLanguageID()).subscribe((response)=>{
      
    if(!response.isError){
      this.websiteSetting = response.result.data
    
    }
    })
  }

getAllProjects(){
  
  this.projects.getAllProjects(this.language.getLanguageID()).subscribe((response:any)=>{
    console.log('all projects',response)
    this.AllProjects = []
    this.projectsForSale =[]
    this.projectsForRent = []
    
    this.AllProjects = response.result.data
    this.projectsForSale = response.result.data.filter((item:any)=> item.status === 'For Sale' || item.status === 'متاح')
    this.projectsForRent = response.result.data.filter((item:any)=> item.status === 'BookedUp')

  })
}

  ngOnInit(): void {
    this.getSettingTypes()
    this.getWebsiteSetting()
    this.generalService.changeNavBarTheme({transparentNav:false})
    //console.log(this.generalService.checkNavIsTRansparent())
    this.getAllProjects()
  this.language.changeLanguageStatus.subscribe((data)=>{
    console.log('language updated',data)
    this.getAllProjects()
    this.getWebsiteSetting()
  })
  }
}
