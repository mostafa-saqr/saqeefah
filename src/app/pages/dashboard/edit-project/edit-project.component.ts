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
  projectOverView:string
  imageMapHardCode:string
  masterPlaneImage:File = null
  specificationsImage:File = null
  grantiesImage:File = null
  projectId:any
projectImageThumb:File = null
projectImageGallery:File[] = []
formData:FormData = new FormData()
masterPlaneFormData:FormData = new FormData
specificationsFormData:FormData = new FormData
uploadWorking:boolean = false
masterPlaneUploadMessage:string

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
  this.uploadWorking = true
  e.preventDefault();
        this.formData.append('CoverImage',this.projectImageThumb, this.projectImageThumb.name)
        
        this.formData.append('Project_Id',this.projectId)
        
        for  (var i =  0; i <  this.projectImageGallery.length; i++)  {  
          this.formData.append("Images", this.projectImageGallery[i],this.projectImageGallery[i].name);
      }
      
        console.log('form data',this.formData.get('CoverImage'))

        console.log('form data',this.formData.get('Images')); 

        
 this.editProject.uploadProjectImage(this.formData).subscribe((resp)=>{
  

  this.uploadWorking = false
  console.log('api project image',resp)
 })
}
onMasterPlaneInputChange(event){
  if(event.target.files){
    this.masterPlaneImage = <File>event.target.files[0]
console.log('masterPlane file data',this.masterPlaneImage)
  }

  
}
UploadMasterPlane(e){
  this.uploadWorking = true
  this.masterPlaneFormData.append('Project_Id',this.projectId)
  this.masterPlaneFormData.append('MasterPlaneImage',this.masterPlaneImage,this.masterPlaneImage.name)
  this.masterPlaneFormData.append('HardCode',this.imageMapHardCode)
  this.masterPlaneFormData.append('ProjectOverview',this.projectOverView)
  this.editProject.uploadProjectMasterPlane(this.masterPlaneFormData).subscribe((resp)=>{
    console.log(resp)
    this.uploadWorking = false;
    this.masterPlaneUploadMessage = resp.message
   })
  
}
onSpecificationsInputChange(event){
  if(event.target.files){
    this.specificationsImage = <File>event.target.files[0]
console.log('specs file data',this.specificationsImage)
  }

  
}
onGrantiesInputChange(event){
  if(event.target.files){
    this.grantiesImage = <File>event.target.files[0]
console.log('granties file data',this.grantiesImage)
  }

  
}
UploadSpecifications(e){
  this.uploadWorking = true
  this.masterPlaneFormData.append('Project_Id',this.projectId)
  this.specificationsFormData.append('Specifications',this.specificationsImage,this.specificationsImage.name)
  this.specificationsFormData.append('Granties',this.grantiesImage,this.grantiesImage.name)


  this.editProject.uploadProjectSpecifications(this.specificationsFormData).subscribe((resp)=>{
    this.uploadWorking = false
    console.log(resp)
   })
  
}
  constructor(private editProject:ProjectAndListService, private route:ActivatedRoute, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('project id',this.projectId)
  }

}
