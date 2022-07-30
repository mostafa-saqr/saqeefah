import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
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
