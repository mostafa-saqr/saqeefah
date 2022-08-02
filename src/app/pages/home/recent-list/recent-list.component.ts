import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.component.html',
  styleUrls: ['./recent-list.component.scss']
})
export class RecentListComponent implements OnInit {
@Input() projects:any
@Input() projectsForSale:any

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{

  }
}
