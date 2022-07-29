
import {  Component, OnDestroy, OnInit } from '@angular/core';
import { GenaricService } from 'src/app/services/Genaric.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  constructor(private generalService:GenaricService) {
 
   }

  ngOnInit(): void {
    this.generalService.changeNavBarTheme({transparentNav:true})
    console.log(this.generalService.checkNavIsTRansparent())
  }
  ngOnDestroy(): void{
    this.generalService.changeNavBarTheme({transparentNav:false})
    console.log(this.generalService.checkNavIsTRansparent())

  }

}
