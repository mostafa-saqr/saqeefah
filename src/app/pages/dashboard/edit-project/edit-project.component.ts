import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  projectId:any
projectImageThumb:File = null
projectImageGallery:File[] = []
formData:FormData = new FormData()
onInputChange(event){
 
  
  if(event.target.files){
    this.projectImageThumb = <File>event.target.files[0]
console.log('file data',this.projectImageThumb)
  }
}
onGalleryInputChange(event){
  if(event.target.files){
    for  (var i =  0; i <  event.target.files.length; i++)  {  
      this.projectImageGallery.push(<File>event.target.files[i])
  }
   
console.log('file data',this.projectImageGallery)
  }
}
uploadImage(e){
  
  e.preventDefault();
        this.formData.append('CoverImage',this.projectImageThumb, this.projectImageThumb.name)
        
        this.formData.append('Project_Id',this.projectId)
        
        for  (var i =  0; i <  this.projectImageGallery.length; i++)  {  
          this.formData.append("Images", this.projectImageGallery[i],this.projectImageGallery[i].name);
      }
      
        console.log('form data',this.formData.get('CoverImage'))

        console.log('form data',this.formData.get('Images')); 

        
 this.editProject.uploadProjectImage(this.formData).subscribe((resp)=>{
  console.log(resp)
 })
}
  constructor(private editProject:ProjectAndListService, private route:ActivatedRoute, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('project id',this.projectId)
  }

}
