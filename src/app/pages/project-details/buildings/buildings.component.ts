import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit, AfterViewInit {
  @Input() buildings:any
  @Input() activeBuilding:any
  propertIndex:number = 0
  propertyOfSelectedBuilding!:[]
  getBuildingProperty(building){
    if(this.buildings != undefined){
      if(building != undefined){
        let selectedBuild  = this.buildings.filter((item)=> item.build == building)
        
        this.propertyOfSelectedBuilding = selectedBuild[0].apartments
        this.activeBuilding = this.buildings[0].build
      } else {
        this.propertyOfSelectedBuilding = this.buildings[0].apartments
      
      
      }
    }

  }
  filter(e){
this.propertyOfSelectedBuilding = e
  }
  constructor() { }

  ngOnInit(): void {
    console.log('buildings', this.buildings)
  this.getBuildingProperty(this.activeBuilding)
  }
ngAfterViewInit(): void {
 
}
}
