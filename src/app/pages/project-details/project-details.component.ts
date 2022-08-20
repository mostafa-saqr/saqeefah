import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  activeBuildingTab:boolean = false
  sendBuildId!:number
projectDetails:any
  constructor(private route: ActivatedRoute,private generalService:GenaricService, private projects:ProjectAndListService,private language:changeLanguageService) { }

  ngOnInit(): void {
    this.getProjectDetails()
  }
  goToSpecialBuilding(id:number){
    this.sendBuildId = id;
    this.activeBuildingTab = true
  }
getProjectDetails(){
  let projectId = this.route.snapshot.paramMap.get('id')
  this.projects.getProjectDetails(this.language.getLanguageID(),projectId).subscribe((response:any)=>{
    console.log('projectDetails',response)

    this.projectDetails = response.result.data
  })
}
}
