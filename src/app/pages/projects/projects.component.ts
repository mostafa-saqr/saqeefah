import { Component, OnInit } from '@angular/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { GenaricService } from 'src/app/services/Genaric.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   view:string='grid3';
   Total=0;
  constructor(private generalService:GenaricService, private projects:ProjectAndListService,private language:changeLanguageService) { }
  AllProjects:[] = []
  getAllProjects(){
    this.projects.getAllProjects(this.language.getLanguageID()).subscribe((response:any)=>{
      console.log('all projects',response)
    
      
      this.AllProjects = response.result.data
     this.Total= response.result.data.length;
    
  
    })
  }
  ngOnInit(): void {
  
    this.getAllProjects()
    this.language.changeLanguageStatus.subscribe((data)=>{
      this.getAllProjects()
    })
  }




  toggleView(view:string){
   if(view == 'grid3')
     this.view='grid3';
    if (view=='grid6')
    this.view='grid6';
    if (view == 'list')
    this.view='list';


  }
 
  filter(e){
    this.AllProjects = e;
   
 }
  
}
