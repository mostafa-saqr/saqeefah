import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {
  imageThumbUrl = [];
  galleryUrl = []
  uploadThumbPhoto(event,element){
    console.log(event)
    if(event.target.files){
      for(let i = 0; i < event.target.files.length;i++){
        var reader = new FileReader()
      reader.readAsDataURL(event.target.files[i])
      reader.onload = ((response:any)=>{
        element.push(response.target.result)
        
      })
    }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
