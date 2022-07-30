import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() project:any
homespecs = [1,1,1,1,1,1]
itemSpecsIcon = [
  {
    icon:true,
    src:'icon tagr-icon-meeting-room',
    type:'Rooms',
    count:'3'
  },
  {
    icon:false,
    src:'../../../assets/fonts/icons/bath.svg',
    type:'Bathrooms',
    count:'2'
  },
  {
    icon:true,
    src:'icon tagr-icon-kitchen',
    type:'Kitchen',
    count:'1'
  },
  {
    icon:true,
    src:'icon tagr-icon-couch',
    type:'Furnished',
    count:'1'
  },
  {
    icon:true,
    src:'icon tagr-icon-air-conditioner',
    type:'Air Condition',
    count:'4'
  },
  {
    icon:false,
    src:'../../../assets/fonts/icons/bed.svg',
    type:'Beds',
    count:'6'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
