
import {  Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { SettingTypes } from 'src/app/shared/Enums/enums';
import { ISettingType } from '../dashboard/setting/models/settingType.interface';
import { SettingsService } from '../dashboard/setting/services/settings.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {


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

 


getAllProjects(){
  
  this.projects.getAllProjects(this.language.getLanguageID()).subscribe((response:any)=>{
    console.log('all projects',response)
    this.AllProjects = []
    this.projectsForSale =[]
    this.projectsForRent = []
    
   if(!response.isError){
    this.AllProjects = response.result.data
    this.projectsForSale = response.result.data.filter((item:any)=> item.status === 'For Sale' || item.status === 'متاح')
    this.projectsForRent = response.result.data.filter((item:any)=> item.status === 'BookedUp')
   }

  })
}

  ngOnInit(): void {

    this.generalService.changeNavBarTheme({transparentNav:false})
    //console.log(this.generalService.checkNavIsTRansparent())
    this.getAllProjects()
  this.language.changeLanguageStatus.subscribe((data)=>{
    console.log('language updated',data)
    this.getAllProjects()
    
  })
  }
  ngOnDestroy(): void{
    this.generalService.changeNavBarTheme({transparentNav:false})
    console.log(this.generalService.checkNavIsTRansparent())

  }

}
