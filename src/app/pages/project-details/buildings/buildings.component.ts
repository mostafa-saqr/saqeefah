import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  @Input() buildings:any
  @Input() activeBuilding!:number
  propertIndex:number = 0
  getBuildingProperty(propertyIndex:any){
this.propertIndex = propertyIndex

  }
 
  constructor() { }

  ngOnInit(): void {
    console.log('buildings', this.buildings)
  }

}
