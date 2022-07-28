import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  homespecs = [1,1]
  itemSpecsIcon = [
    {
      icon:true,
      src:'icon tagr-icon-building-line',
      type:'Buildings',
      count:'3'
    },
    {
      icon:true,
      src:'icon tagr-icon-home',
      type:'Apprtments',
      count:'60'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
