import { AfterViewChecked, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, AfterViewChecked {
  getMapImageHardCode:any
  activeBuildingTab:boolean = false
  sendBuildId!:string
projectDetails:any
  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef,private sanitized: DomSanitizer,private route: ActivatedRoute,private generalService:GenaricService, private projects:ProjectAndListService,private language:changeLanguageService) { }
  appRootUrl = environment.appRoot+'/';
  ngOnInit(): void {
    this.getProjectDetails()
  }
  goToSpecialBuilding(build:string){
    this.sendBuildId = build;
    this.activeBuildingTab = true
  }
getProjectDetails(){
  let projectId = this.route.snapshot.paramMap.get('id')
  this.projects.getProjectDetails(this.language.getLanguageID(),projectId).subscribe((response:any)=>{
    console.log('projectDetails',response)

    this.projectDetails = response.data
    this.sendBuildId = response.data.buildingApartments[0].build
    this.getMapImageHardCode = this.sanitized.bypassSecurityTrustHtml(response.data.masterPlane.hardCode)
  })
}
ngAfterViewChecked() {
  
  this.document.addEventListener('click',(e)=>{
    
    let x  = (e.target as HTMLInputElement).dataset['href'];
    if(x != undefined) {
      this.goToSpecialBuilding(x)
      
    } else {
      e.stopPropagation()
    }
    
  
 });

}
}
