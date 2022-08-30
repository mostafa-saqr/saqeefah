import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectAndListService } from 'src/app/services/project-lists.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
propertyId:any
propertyDetails:any
  constructor(private route:ActivatedRoute, private property:ProjectAndListService) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id');
    this.getPropertyDetails()
  }
getPropertyDetails(){
this.property.getAppartmentDetails(this.propertyId).subscribe((res:any)=>{
if(!res.isError){
  this.propertyDetails = res.result.data
console.log('property',res)
}
})
}
}
