import { Component, OnInit } from '@angular/core';
import { changeLanguageService } from 'src/app/services/changeLanguage.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  view:string='grid3';
  Total=0;
  AllProperties:[] = []
  // listResult = [
  //   {
  //     img:'assets/images/list/l2.jpg'
  //   },
  //   {
  //     img:'assets/images/list/l4.jpg'
  //   },
  //   {
  //     img:'assets/images/list/l4.jpg'
  //   },
  //   {
  //     img:'assets/images/list/l2.jpg'
  //   },
  //   {
  //     img:'assets/images/list/l2.jpg'
  //   },
  //   {
  //     img:'assets/images/list/l4.jpg'
  //   },
  // ]
  constructor(private properties:ProjectAndListService,private language:changeLanguageService) { }

  getAllProperties(){
    this.properties.getAllProperties().subscribe((response:any)=>{
      console.log('response',response)
      
  if(!response.isError){
    this.AllProperties = response.result.data
    console.log('all properities', this.AllProperties)
    this.Total=response.result.data.length;
    console.log('total',this.Total)
  }
     
  
    })
  }
  ngOnInit(): void {
    this.getAllProperties()
    this.language.changeLanguageStatus.subscribe((data)=>{
      this.getAllProperties()
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
    this.AllProperties = e;
   
 }
 sortAssending(){
  this.AllProperties.sort((a:any, b:any) => b.projectName.localeCompare(a.projectName))
  console.log(this.AllProperties)
 }
 sortDessending(){
  this.AllProperties.sort((a:any, b:any) => a.projectName - b.projectName);
 }
 refresh(){
  window.location.reload();
 }

}
