import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/services/Result';
import { environment } from 'src/environments/environment';
import { ITestItem } from '../services/ITestItem.interface';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public items: ITestItem[];

  public appRoot = environment.appRoot;

  

  constructor( private testService:TestService) {
   
    this.testService.getList().subscribe(res=>{
      if(!res.isError){
        this.items=res.result.data;

        console.log(this.items); 
      }
    }); 


   

   }

  ngOnInit(): void {
  }

}
