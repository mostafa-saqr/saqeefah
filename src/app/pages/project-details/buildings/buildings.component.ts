import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
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
