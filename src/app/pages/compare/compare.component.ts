import { Component, OnInit } from '@angular/core';
import { CompareService } from 'src/app/services/compare.service';
import { ProjectAndListService } from 'src/app/services/project-lists.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
compareList:any[] = []
appRootUrl = environment.appRoot+'/';
  constructor(private appartments:ProjectAndListService, public compareServ:CompareService) { }

  ngOnInit(): void {
    this.getCompareList()
    this.compareServ.changeComparetatus.subscribe((value)=>{
      this.getCompareList()

   })
  }
getCompareList(){
  let currentCompareLocalStorage = window.localStorage.getItem('Compare')!
  if(currentCompareLocalStorage != null){
  let parsingCompare = JSON.parse(currentCompareLocalStorage)
  if(parsingCompare.length > 0){
    this.appartments.getCompareAppartmens(parsingCompare).subscribe((item:any)=>{
      console.log(item)
      this.compareList = item.data
    })
  }
}
}
}
