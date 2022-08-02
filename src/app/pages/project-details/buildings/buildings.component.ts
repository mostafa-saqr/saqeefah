import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  @Input() buildings:any
  propertIndex:number = 0
  getBuildingProperty(propertyIndex:any){
this.propertIndex = propertyIndex

  }
  listResult = [
    {
      img:'assets/images/list/l2.jpg'
    },
    {
      img:'assets/images/list/l4.jpg'
    },
    {
      img:'assets/images/list/l4.jpg'
    },
    {
      img:'assets/images/list/l2.jpg'
    },
    {
      img:'assets/images/list/l2.jpg'
    },
    {
      img:'assets/images/list/l4.jpg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
