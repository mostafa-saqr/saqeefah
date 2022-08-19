import { Component, OnInit } from '@angular/core';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
projectImageThumb:File
formData:FormData = new FormData()
onInputChange(event){
  if(event.target.files){
    this.projectImageThumb = <File>event.target.files[0]
console.log('file data',this.projectImageThumb)
  }
}
uploadImage(){
let mm = [1]
        this.formData.append('CoverImage',this.projectImageThumb)
        this.formData.append('Project_Id', '1')
        console.log('form data',this.formData.get('CoverImage'))
        
 this.editProject.uploadProjectImage(this.formData).subscribe((resp)=>{
  console.log(resp)
 })
}
  constructor(private editProject:ProjectAndListService) { }

  ngOnInit(): void {
  }

}
