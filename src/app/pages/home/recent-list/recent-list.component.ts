import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.component.html',
  styleUrls: ['./recent-list.component.scss']
})
export class RecentListComponent implements OnInit {
@Input() projects:any
@Input() projectsForSale:any;
@Input() projectsBooked:any;
@Input() projectsForSaleSoon:any;
@Input() isHome:boolean=false;
@Input() isAbout:boolean=false;





  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{

  }
}
