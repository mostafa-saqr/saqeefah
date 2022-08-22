import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {
  propertyId:any
  uploadWorking =false
  projectId:any
propertyImageThumb:File = null
propertyImageGallery:File[] = []
formData:FormData = new FormData()
onInputChange(event){
 
  
  if(event.target.files){
    this.propertyImageThumb = <File>event.target.files[0]
console.log('file data',this.propertyImageThumb)
  }
}
onGalleryInputChange(event){
  if(event.target.files){
    for  (var i =  0; i <  event.target.files.length; i++)  {  
      this.propertyImageGallery.push(<File>event.target.files[i])
  }
}
}
  
uploadImage(e){
  this.uploadWorking = true
  e.preventDefault();
        this.formData.append('CoverImage',this.propertyImageThumb, this.propertyImageThumb.name)
        
        this.formData.append('Apartment_Id',this.propertyId)
        this.formData.append('Project_Id',this.projectId)

        
        for  (var i =  0; i <  this.propertyImageGallery.length; i++)  {  
          this.formData.append("Images", this.propertyImageGallery[i],this.propertyImageGallery[i].name);
      }
      
        console.log('form data',this.formData.get('CoverImage'))

        console.log('form data',this.formData.get('Images')); 

        
 this.editproperty.uploadpropertyImage(this.formData).subscribe((resp)=>{
  console.log(resp)
  this.uploadWorking = false

 })
}
  constructor(private editproperty:ProjectAndListService, private route:ActivatedRoute, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('propertyId');
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    
    console.log('property id',this.propertyId,this.projectId)
  }

}
